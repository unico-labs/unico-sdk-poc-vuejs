<template>
  <section>
    <aside>
      <v-button @click="openSelfieCameraNormal()"> Camera Normal </v-button>
      <v-button @click="openSelfieCameraSmart()"> Camera Smart </v-button>
      <v-button @click="openSelfieCameraLiveness()"> Camera Liveness </v-button>
      <v-button @click="openDocumentCameraCNH()"> Camera CNH </v-button>
      <v-button @click="openDocumentCameraOutros()"> Camera Outros </v-button>
    </aside>
    <div id="box-camera">
      <p v-if="!sdk.camera">Carregando SDK...</p>
      <p v-else>SDK Pronto. Clique em um botão para abrir a câmera.</p>
    </div>
  </section>
</template>

<script>
import {
  UnicoThemeBuilder,
  UnicoCheckBuilder,
  SelfieCameraTypes,
  DocumentCameraTypes,
  SDKEnvironmentTypes,
  UnicoConfig,
} from "unico-webframe";

export default {
  name: "CaptureView",

  components: {
    VButton: () =>
      import(/* webpackChunkName: "vbutton" */ "@/components/VButton.vue"),
  },

  data() {
    const unicoServicesConfig = new UnicoConfig()
      .setHostname("<YOUR_HOSTNAME>") // <-- Substitua pelo seu Hostname
      .setHostKey("<YOUR_SDKKEY>"); // <-- Substitua pela sua SDK Key

    return {
      sdk: {
        builder: null,
        theme: null,
        camera: null, // Inicializa como null
        services: unicoServicesConfig,
        models: "/data/models", // Verifique se este caminho está correto e acessível
        resources: "/data/resources", // Verifique se este caminho está correto e acessível
        environment: SDKEnvironmentTypes.UAT, // Ambiente UAT
      },
    };
  },

  mounted() {
    this.loadSDK();
  },

  methods: {
    handleError(error) {
      console.error("Unico SDK Error:", error);
      // Exibe um alerta mais informativo para o usuário ou loga em um sistema de monitoramento
      alert(
        `Ocorreu um erro com o SDK: ${
          error.message || "Erro desconhecido. Verifique o console."
        }`
      );
    },

    instantiateNewBuilder() {
      try {
        this.sdk.builder = new UnicoCheckBuilder();
        console.log("UnicoCheckBuilder instantiated.");
      } catch (err) {
        this.handleError(
          new Error(
            `Failed to instantiate UnicoCheckBuilder: ${err.message || err}`
          )
        );
      }
    },

    instantiateTheme() {
      try {
        this.sdk.theme = new UnicoThemeBuilder()
          // Suas configurações de tema...
          .setColorSilhouetteSuccess("#0384fc")
          .setColorSilhouetteError("#D50000")
          .setColorSilhouetteNeutral("#fcfcfc")
          .setBackgroundColor("#dff1f5")
          .setColorText("#0384fc")
          .setBackgroundColorComponents("#0384fc")
          .setColorTextComponents("#dff1f5")
          .setBackgroundColorButtons("#0384fc")
          .setColorTextButtons("#dff1f5")
          .setBackgroundColorBoxMessage("#fff")
          .setColorTextBoxMessage("#000")
          .setHtmlPopupLoading(
            '<div style="position:absolute;top:45%;right:50%;transform:translate(50%,-50%);z-index:10;text-align:center;">Carregando...</div>'
          )
          .build();
        console.log("UnicoThemeBuilder theme built.");
      } catch (err) {
        this.handleError(
          new Error(`Failed to build theme: ${err.message || err}`)
        );
      }
    },

    async instantiateCamera() {
      if (!this.sdk.builder) {
        this.handleError(
          new Error(
            "SDK Builder not instantiated before trying to instantiate camera."
          )
        );
        return;
      }
      if (!this.sdk.theme) {
        this.handleError(
          new Error(
            "SDK Theme not instantiated before trying to instantiate camera."
          )
        );
        return;
      }

      try {
        console.log(
          "Instantiating camera with environment:",
          this.sdk.environment
        );
        this.sdk.builder
          .setTheme(this.sdk.theme)
          .setModelsPath(this.sdk.models)
          .setResourceDirectory(this.sdk.resources)
          .setEnvironment(this.sdk.environment); // Configura o ambiente

        this.sdk.camera = await this.sdk.builder.build();
        console.log("Unico Camera instantiated successfully."); // Confirmação
      } catch (err) {
        this.handleError(
          new Error(
            `Failed to instantiate camera (build step): ${err.message || err}`
          )
        );
      }
    },

    async loadSDK() {
      console.log("Loading SDK...");
      this.instantiateNewBuilder();
      this.instantiateTheme();

      if (this.sdk.builder && this.sdk.theme) {
        await this.instantiateCamera();
      } else {
        console.error(
          "Cannot instantiate camera because builder or theme failed."
        );
      }
      console.log("SDK Load process finished.");
    },

    async prepareCamera(
      cameraType,
      prepareMethod,
      successCallback,
      errorCallback
    ) {
      if (!this.sdk.camera) {
        this.handleError(
          new Error("Camera not ready. Load SDK process might have failed.")
        );
        return;
      }
      const vm = this;

      try {
        console.log(`Preparing ${cameraType}...`);
        const cameraOpener = await prepareMethod(this.sdk.services);
        console.log(`${cameraType} prepared. Opening camera...`);
        cameraOpener.open({
          on: {
            success: (data) => {
              console.log(
                `${cameraType} Success:`,
                data.base64 ? data.base64.substring(0, 50) + "..." : data
              );
              if (successCallback) successCallback(data);
            },
            error: (err) => {
              console.error(`${cameraType} Error Callback:`, err);
              vm.handleError(err);
              if (errorCallback) errorCallback(err);
            },
            support: (msg) =>
              console.log(`${cameraType} Support Message:`, msg),
          },
        });
      } catch (e) {
        console.error(`Error preparing ${cameraType}:`, e);
        vm.handleError(
          new Error(`Erro ao preparar ${cameraType}: ${e.message || e}`)
        );
      }
    },

    async prepareSelfie(type) {
      await this.prepareCamera(
        `Selfie ${type}`,
        (services) =>
          this.sdk.camera.prepareSelfieCamera(
            services,
            SelfieCameraTypes[type]
          ),
        (data) => {
          /* Callback de sucesso específico se necessário */
        },
        (err) => {
          /* Callback de erro específico se necessário */
        }
      );
    },

    async prepareDocs(type, others = false) {
      const documentCameraType = others
        ? DocumentCameraTypes.OTHERS
        : DocumentCameraTypes[type];
      if (!documentCameraType) {
        this.handleError(
          new Error(`Invalid DocumentCameraType for: ${type}, others=${others}`)
        );
        return;
      }

      await this.prepareCamera(
        `Document ${type}`,
        (services) =>
          this.sdk.camera.prepareDocumentCamera(services, documentCameraType),
        (data) => {
          /* Callback de sucesso específico se necessário */
        },
        (err) => {
          /* Callback de erro específico se necessário */
        }
      );
    },

    // --- Métodos de clique ---

    openSelfieCameraNormal() {
      this.prepareSelfie("NORMAL");
    },

    openSelfieCameraSmart() {
      this.prepareSelfie("SMART");
    },

    openSelfieCameraLiveness() {
      // Liveness geralmente usa SMART, mas pode ter tipo específico 'LIVENESS'
      // Verifique a documentação do Unico para o SelfieCameraTypes correto
      this.prepareSelfie("SMART"); // Ou "LIVENESS" se existir
    },

    openDocumentCameraCNH() {
      this.prepareDocs("CNH");
    },

    openDocumentCameraOutros() {
      // Verifique qual tipo usar para 'OTHERS'. Pode ser 'OTHERS' ou um tipo genérico.
      this.prepareDocs("OTHERS", true); // Passando "OTHERS" como tipo para DocumentCameraTypes.OTHERS
    },
  },
};
</script>

<style lang="scss" scoped>
section {
  margin: 0 auto;
  padding: 20px;
  width: 100%;
  height: 100%;
  max-width: 80vw;
  min-width: 300px;
  box-sizing: border-box;
}

aside {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;

  button {
    margin: 5px;
  }
}

#box-camera {
  border: 1px dashed #ccc;
  min-height: 300px;
  width: 100%;
  background-color: #f0f0f0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #666;
  text-align: center; // Centraliza o texto de carregamento
  padding: 10px; // Adiciona padding interno
  box-sizing: border-box;
}
</style>
