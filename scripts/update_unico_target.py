import requests
from bs4 import BeautifulSoup
import re
import json
import subprocess
import os

# ===============================
# Configurações do Script
# ===============================
URL_RELEASE_NOTES = "https://devcenter.unico.io/idcloud/integracao/sdk/integracao-sdks/sdk-web/release-notes"
DEPENDENCY_NAME = "unico-webframe"
REPO_PATH = "."  # Diretório do repositório local

# ===============================
# 1️⃣ Capturar a versão e a data da página
# ===============================
try:
    response = requests.get(URL_RELEASE_NOTES, timeout=10)
    response.raise_for_status()  # Levanta um erro para respostas 4xx/5xx
    soup = BeautifulSoup(response.text, "html.parser")
    
    # Encontra o div que contém a informação de release
    release_div = soup.find("div", class_="flex-1 z-1 max-w-full break-words text-start justify-self-start leading-snug")
    
    site_version = None
    release_date = None

    if release_div:
        text_content = release_div.get_text(strip=True)
        match = re.search(r"Versão\s+([\d.]+)\s*-\s*(\d{2}/\d{2}/\d{4})", text_content)
        if match:
            site_version = match.group(1)
            release_date = match.group(2)

    if not site_version:
        # Se a versão não for encontrada, o script falha com um erro
        raise ValueError("❌ Não foi possível extrair a versão do site. Verifique o seletor HTML ou a estrutura da página.")

    print(f"📦 Última versão no site: {site_version}")
    print(f"🗓️ Data de lançamento: {release_date}")

except requests.exceptions.RequestException as e:
    raise RuntimeError(f"❌ Erro ao acessar a URL de releases: {e}")
except Exception as e:
    raise RuntimeError(f"❌ Erro inesperado ao processar a página: {e}")

# ===============================
# 2️⃣ Ler o package.json
# ===============================
package_json_path = os.path.join(REPO_PATH, "package.json")
if not os.path.exists(package_json_path):
    raise FileNotFoundError(f"❌ package.json não encontrado em: {package_json_path}")

with open(package_json_path, "r", encoding="utf-8") as f:
    package_json = json.load(f)

current_version = package_json.get("dependencies", {}).get(DEPENDENCY_NAME)
if not current_version:
    raise KeyError(f"❌ Dependência '{DEPENDENCY_NAME}' não encontrada no package.json.")

print(f"📂 Versão atual no package.json: {current_version}")

# ===============================
# 3️⃣ Atualizar, se necessário
# ===============================
if current_version != site_version:
    print(f"✅ Atualizando {DEPENDENCY_NAME} de {current_version} para {site_version}...")
    
    # Atualiza a versão no arquivo
    package_json["dependencies"][DEPENDENCY_NAME] = site_version
    with open(package_json_path, "w", encoding="utf-8") as f:
        json.dump(package_json, f, indent=2, ensure_ascii=False)
        
    branch_name = f"update-{DEPENDENCY_NAME}-v{site_version}"
    tag_name = f"{DEPENDENCY_NAME}-v{site_version}"

    try:
        # Sequência de comandos Git
        subprocess.run(["git", "config", "user.name", "github-actions"], check=True)
        subprocess.run(["git", "config", "user.email", "github-actions@github.com"], check=True)
        subprocess.run(["git", "checkout", "-b", branch_name], check=True)
        subprocess.run(["git", "add", "package.json"], check=True)
        subprocess.run(["git", "commit", "-m", f"chore: bump {DEPENDENCY_NAME} to v{site_version}"], check=True)

        # ⚠️ Implementação da correção: git pull --rebase ⚠️
        # Essa linha deve vir logo depois do commit e antes do push.
        # Ela garante que a branch local está atualizada com a branch remota.
        # Se a branch remota já existir, o pull --rebase irá pegar as últimas mudanças
        # e aplicar o seu commit por cima delas, evitando o erro de "push rejected".
        subprocess.run(["git", "pull", "--rebase", "origin", branch_name], check=True)
        subprocess.run(["git", "push", "origin", branch_name], check=True)

        # Cria a tag para o release
        subprocess.run(["git", "tag", "-a", tag_name, "-m", f"Release {DEPENDENCY_NAME} {site_version} ({release_date})"], check=True)
        subprocess.run(["git", "push", "origin", tag_name], check=True)

        # Cria o Pull Request usando o GitHub CLI
        pr_body = f"""
        **Atualização automática** do SDK `{DEPENDENCY_NAME}` para a versão **`{site_version}`**.
        * **Data de Lançamento:** `{release_date}`
        * **Notas da Versão:** [Clique aqui]({URL_RELEASE_NOTES})
        """
        subprocess.run([
            "gh", "pr", "create",
            "--title", f"feat: Atualizar {DEPENDENCY_NAME} para v{site_version}",
            "--body", pr_body,
            "--head", branch_name
        ], check=True)
        
        print("🎉 Processo de atualização concluído. Pull Request criado.")

    except subprocess.CalledProcessError as e:
        raise RuntimeError(f"❌ Erro em um comando Git/GitHub CLI: {e}")

else:
    print("🔄 Versão já está na mais recente. Nenhuma ação necessária.")
