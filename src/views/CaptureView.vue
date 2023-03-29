<template>
  <section>
    <aside>
      <v-button @click="openSelfieCameraNormal()"> Camera Normal </v-button>
      <v-button @click="openSelfieCameraSmart()"> Camera Smart </v-button>
      <v-button @click="openSelfieCameraLiveness()"> Camera Liveness </v-button>
      <v-button @click="openDocumentCameraCNH()"> Camera CNH </v-button>
      <v-button @click="openDocumentCameraOutros()"> Camera Outros </v-button>
    </aside>
    <div id="box-camera" />
  </section>
</template>

<script>
import {
  UnicoThemeBuilder,
  UnicoCheckBuilder,
  SelfieCameraTypes,
  DocumentCameraTypes,
} from "unico-webframe";

export default {
  name: "CaptureView",

  components: {
    VButton: () =>
      import(/* webpackChunkName: "vbutton" */ "@/components/VButton.vue"),
  },

  data: () => ({
    sdk: {
      builder: null,
      theme: null,
      camera: null,
      services: "/data/services.json",
      models: "/data/models",
      resources: "/data/resources",
    },
  }),

  mounted() {
    this.loadSDK();
  },

  methods: {
    handleError(error) {
      console.error(error);
    },

    handlerCamera() {},

    instantiateNewBuilder() {
      try {
        this.sdk.builder = new UnicoCheckBuilder();
      } catch (err) {
        this.handleError(err);
      }
    },

    instantiateTheme() {
      try {
        this.sdk.theme = new UnicoThemeBuilder()
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
      } catch (err) {
        this.handleError(err);
      }
    },

    async instantiateCamera() {
      try {
        await this.sdk.builder
          .setTheme(this.sdk.theme)
          .setModelsPath(this.sdk.models)
          .setResourceDirectory(this.sdk.resources);

        this.sdk.camera = await this.sdk.builder.build();
      } catch (err) {
        this.handleError(err);
      }
    },

    async loadSDK() {
      await Promise.all([this.instantiateNewBuilder(), this.instantiateTheme()])
        .then(async () => {
          await this.instantiateCamera();
        })
        .catch((err) => this.handleError(err));
    },

    async prepareSelfie(type) {
      const vm = this;

      await this.sdk.camera
        .prepareSelfieCamera(this.sdk.services, SelfieCameraTypes[type])
        .then((opener) => {
          opener.open({
            on: {
              success: (data) => console.log(data.base64),
              error: (err) => vm.handleError(err),
              support: (msg) => console.log(msg),
            },
          });
        })
        .catch((e) => {
          vm.handleError(`Erro ao preparar camera ${type}`);
          vm.handleError(e);
        });
    },

    prepareDocs(type, others = false) {
      const vm = this;
      const documentCameraType = others
        ? DocumentCameraTypes.OTHERS(type)
        : DocumentCameraTypes[type];

      this.sdk.camera
        .prepareDocumentCamera(this.sdk.services, documentCameraType)
        .then((opener) => {
          opener.open({
            on: {
              success: (data) => console.log(data.base64),
              error: (err) => vm.handleError(err),
              support: (msg) => console.log(msg),
            },
          });
        })
        .catch(() => vm.handleError(`Erro ao preparar camera ${type}`));
    },

    openSelfieCameraNormal() {
      this.prepareSelfie("NORMAL");
    },

    openSelfieCameraSmart() {
      this.prepareSelfie("SMART");
    },

    openSelfieCameraLiveness() {
      this.prepareSelfie("SMART");
    },

    openDocumentCameraCNH() {
      this.prepareDocs("CNH");
    },

    openDocumentCameraOutros() {
      this.prepareDocs("Teste", true);
    },
  },
};
</script>

<style lang="scss" scoped>
section {
  margin: 0 auto;

  width: 100%;
  height: 100%;
  max-width: 50vw;
  min-width: 220px;
}

aside {
  display: flex;
  justify-content: center;
  align-items: center;

  button:not(:last-child) {
    margin-right: 10px;
  }
}
</style>
