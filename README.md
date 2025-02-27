<p align='center'>
  <a href='https://unico.io'>
    <img width='350' src='https://unico.io/wp-content/uploads/2024/05/idcloud-horizontal-color.svg'></img>
  </a>
</p>

<h1 align='center'>SDK Unico</h1>

<div align='center'>
  
  ### POC de implementação do SDK IDpay CBU em VueJs
  
  <img width='350' src='[https://quintagroup.com/cms/js/js-image/react.js-logo.png/@@images/a9bf22bd-373a-4fae-a900-c22fd12c87c7.png](https://cdn.iconscout.com/icon/free/png-256/free-vuejs-logo-icon-download-in-svg-png-gif-file-formats--wordmark-programming-langugae-freebies-pack-logos-icons-1175052.png)'></img>
</div>

## 💻 Compatibilidade

### Dispositivos compatíveis

- Você pode conferior os aparelhos testados em nossos laboratórios <a href='https://devcenter.unico.io/idcloud/integracao/integracao-by-unico/visao-geral#dispositivos-compativeis'>nesta</a> lista de dispositivos.


## ✨ Como começar

Para utilizar o by Unico por meio do SDK do by Unico, o primeiro passo é cadastrar os domínios que serão utilizados como host para exibir o iFrame da jornada do usuário no by Unico.

Sinalize o responsável pelo seu projeto de integração ou o time de suporte da Unico para realizar essa configuração.

Para começar a usar o SDK, é necessário realizar a instalação do SDK Web da Unico. Vale destacar que o "by Unico" utiliza o mesmo SDK empregado no IDPay.:
```javascript
$ npm install idpay-b2b-sdk ou no caso dessa POC apenas o npm install
```

Para conseguir executa-la é necessario ter uma conta de servico na Unico e um ambiente de testes cadastrado pelo seu gerente de projetos para que voce consiga criar um processo, após isso ao criar um processo voce irá recebe um ID de processo e um Token no response.

Com essas informacoes voce deve passar dentro dos métodos Init e Open conforme abaixo e depois executar o npm start para iniciar a POC.

Feito isso deve criar no botao de Init para iniciar a autenticacao e depois no Open para abrir o processo e inciar o fluxo By Unico.


## ✨ Metodos disponiveis

init(options)
Esse método inicializa o SDK, fazendo um pré-carregamento de assets, criando a experiência mais fluida para o usuário final. Nesse momento é preciso enviar o token recebido como resultado do CreateProcess.

<strong>Parâmetros:</strong>

options - é um objeto com as seguintes propriedades de configuração:

<strong>type</strong>

### O tipo de fluxo que será inicializado. No by Unico utilizamos a opção "IFRAME".

<strong>token</strong>

### Recebe o token do processo criado. Esse token é importante para conseguirmos autenticar a jornada e garantir que somente domínios autorizados utilizem-na (pode ser obtido na criação do processo via API).

```javascript
import { UnicoSDK } from “idpay-b2b-sdk”;

UnicoSDK.init({
  env: 'uat'// Só irá ser preenchido se for ambiente de testes.
  token,
});
```

---

<strong>open(options)</strong>
### Esse método realiza a abertura da experiência do by Unico. Para o fluxo do tipo IFRAME, essa função exibe o iframe já pré-carregado, e inicia o fluxo de mensageria entre a página do cliente e a experiência do by Unico.

## Parâmetros:

<strong>options</strong> - é um objeto com propriedades de configuração:

<strong>processId</strong>

### Recebe o ID do processo criado. Esse ID é importante para conseguirmos obter os detalhes do processo e realizarmos todo o fluxo da maneira correta (pode ser obtido na criação do processo via API).

<strong>token</strong>

### Recebe o token do processo criado. Esse token é importante para conseguirmos autenticar a jornada e garantir que somente domínios autorizados utilizem-na (pode ser obtido na criação do processo via API).

<strong>onFinish(process)</strong>

### Recebe uma função de callback que será executada no término da jornada do by Unico, passando como argumento o objeto do processo com os seguintes dados: { captureConcluded, concluded, id }

```javascript
const processId = '9bc22bac-1e64-49a5-94d6-9e4f8ec9a1bf';
```

```javascript
const process = {
  id: '9bc22bac-1e64-49a5-94d6-9e4f8ec9a1bf',
  concluded: true,
  captureConcluded: true
};
```

```javascript
const onFinishCallback = process => {
  console.log('Process', process);
}
```

```javascript
UnicoSDK.open({
  transactionId: processId,
  token: token,
  onFinish: onFinishCallback
});
```

```javascript
UnicoSDK.close();
```

---

## ✨ Link da nossa documentacao: 

https://devcenter.unico.io/idcloud/integracao/integracao-by-unico/controlando-a-experiencia/sdk#como-comecar

