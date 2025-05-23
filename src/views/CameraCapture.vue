<script>
import {
  UnicoCheckBuilder,
  SelfieCameraTypes,
  UnicoThemeBuilder,
  DocumentCameraTypes,
  UnicoConfig,
  SDKEnvironmentTypes
} from 'unico-webframe';

export default {
  name: 'CameraCapture',
  data() {
    return {
      loading: false,
      error: null,
      features: [
        {
          title: 'Liveness Camera',
          description: 'Enhanced selfie capture with intelligent framing',
          type: 'liveness'
        }
      ],
      documentFeatures: [
        {
          title: 'CNH Aberta',
          description: 'Capture Brazilian driver\'s license (CNH)',
          type: 'cnh'
        },
        {
          title: 'CNH Frente',
          description: 'Capture front side of CNH',
          type: 'cnh_frente'
        },
        {
          title: 'CNH Verso',
          description: 'Capture back side of CNH',
          type: 'cnh_verso'
        },
        {
          title: 'RG Frente',
          description: 'Capture front side of RG',
          type: 'rg_frente'
        },
        {
          title: 'RG Verso',
          description: 'Capture back side of RG',
          type: 'rg_verso'
        },
        {
          title: 'RG Frente Novo',
          description: 'Capture new RG front side',
          type: 'rg_frente_novo'
        },
        {
          title: 'RG Verso Novo',
          description: 'Capture new RG back side',
          type: 'rg_verso_novo'
        },
        {
          title: 'CPF',
          description: 'Capture CPF',
          type: 'cpf'
        },
        {
          title: 'Outros Documentos',
          description: 'Capture other types of identification documents',
          type: 'others'
        }
      ]
    }
  },
  computed: {
    unicoConfig() {
      return new UnicoConfig()
        .setHostname("<YOUR_HOSTNAME>")
        .setHostKey("<YOUR_SDKKEY>");
    },
    callback() {
      const self = this;
      return {
        on: {
          success: function(obj) {
            console.log("Success capturing image", obj);
            // Handle both document and selfie captures
            const base64Image = obj.base64 || obj.base64Document || obj.base64Selfie;
            const jwt = obj.encrypted || obj.encryptedDocument || obj.encryptedSelfie;

            if (!base64Image || !jwt) {
              console.error("Missing image data in capture result:", obj);
              self.error = "Failed to process captured image. Please try again.";
              setTimeout(() => self.error = null, 5000);
              return;
            }

            self.$router.push({
              name: 'PhotoResult',
              params: {
                base64: base64Image,
                jwt: jwt
              }
            });
          },
          error: function(error) {
            console.error("unico-webframe error:", {
              code: error?.code,
              message: error?.message,
              fullError: error
            });

            self.error = `Capture error: ${error?.message || 'Unknown error occurred'}. Check console for details.`;
            setTimeout(() => self.error = null, 5000);
          },
          user_canceled: function() {
            console.log("Capture canceled by user.");
          }
        }
      };
    },
    unicoTheme() {
      return new UnicoThemeBuilder()
        .setColorSilhouetteSuccess("#0384fc")
        .setColorSilhouetteError("#D50000")
        .setColorSilhouetteNeutral("#fcfcfc")
        .setBackgroundColor("#f3f8fb")
        .setColorText("#0384fc")
        .setBackgroundColorComponents("#0384fc")
        .setColorTextComponents("#f3f8fb")
        .setBackgroundColorButtons("#0384fc")
        .setColorTextButtons("#f3f8fb")
        .setBackgroundColorBoxMessage("#ffffff")
        .setColorTextBoxMessage("#333333")
        .setHtmlPopupLoading(`
          <div style="position: absolute; top: 45%; right: 50%; transform:
          translate(50%, -50%); z-index: 10; text-align: center;">
            <div class="unico-loader"></div>
            <p style="margin-top: 8px; color: #0384fc; font-family: sans-serif;">Loading...</p>
          </div>
        `)
        .build();
    },
    unicoCamera() {
      return new UnicoCheckBuilder()
        // .setResourceDirectory("/resources")  /* --A partir da versão 3.18.0, o SDK busca os recursos adicionais automaticamente se o método setResourceDirectory não for usado e as configurações de CSP estiverem corretas.-- /*
        .setModelsPath("/models")
        .setEnvironment(SDKEnvironmentTypes.UAT)
        .setTheme(this.unicoTheme)
        .build();
    }
  },
  methods: {
    async openCamera(cameraType) {
      console.log(`Attempting to open camera: ${cameraType}`);
      this.loading = true;
      this.error = null;

      try {
        const handler = this.cameraHandlers[cameraType];
        if (!handler) throw new Error(`Invalid camera type specified: ${cameraType}`);

        await handler.call(this);
      } catch (errorCatch) {
        console.error(`Error PREPARING ${cameraType} camera:`, errorCatch);
        const errorMessage = errorCatch instanceof Error ? errorCatch.message : String(errorCatch);
        this.error = `Failed to initialize camera (${cameraType}). ${errorMessage}. Please check permissions and try again.`;
        setTimeout(() => this.error = null, 7000);
      } finally {
        console.log(`FINALLY block executed after trying to prepare ${cameraType} camera.`);
        this.loading = false;
      }
    },
    async openSelfieCameraLiveness() {
      const cameraPromised = this.unicoCamera
        .prepareSelfieCamera(this.unicoConfig, SelfieCameraTypes.LIVENESS)
        .catch(() => console.error('Error initializing liveness camera'));

      cameraPromised.then(cameraOpener => cameraOpener.open(this.callback));
    },
    async openDocumentCameraCNH() {
      const cameraPromised = this.unicoCamera
        .prepareDocumentCamera(this.unicoConfig, DocumentCameraTypes.CNH)
        .catch(() => console.error('Error initializing CNH camera'));

      cameraPromised.then(cameraOpener => cameraOpener.open(this.callback));
    },
    async openDocumentCameraCPF() {
      const cameraPromised = this.unicoCamera
        .prepareDocumentCamera(this.unicoConfig, DocumentCameraTypes.CPF)
        .catch(() => console.error('Error initializing CPF camera'));

      cameraPromised.then(cameraOpener => cameraOpener.open(this.callback));
    },
    async openDocumentCameraCNHFrente() {
      const cameraPromised = this.unicoCamera
        .prepareDocumentCamera(this.unicoConfig, DocumentCameraTypes.CNH_FRENTE)
        .catch(() => console.error('Error initializing CNH Frente camera'));

      cameraPromised.then(cameraOpener => cameraOpener.open(this.callback));
    },
    async openDocumentCameraCNHVerso() {
      const cameraPromised = this.unicoCamera
        .prepareDocumentCamera(this.unicoConfig, DocumentCameraTypes.CNH_VERSO)
        .catch(() => console.error('Error initializing CNH Verso camera'));

      cameraPromised.then(cameraOpener => cameraOpener.open(this.callback));
    },
    async openDocumentCameraRGFrente() {
      const cameraPromised = this.unicoCamera
        .prepareDocumentCamera(this.unicoConfig, DocumentCameraTypes.RG_FRENTE)
        .catch(() => console.error('Error initializing RG Frente camera'));

      cameraPromised.then(cameraOpener => cameraOpener.open(this.callback));
    },
    async openDocumentCameraRGVerso() {
      const cameraPromised = this.unicoCamera
        .prepareDocumentCamera(this.unicoConfig, DocumentCameraTypes.RG_VERSO)
        .catch(() => console.error('Error initializing RG Verso camera'));

      cameraPromised.then(cameraOpener => cameraOpener.open(this.callback));
    },
    async openDocumentCameraRGFrenteNovo() {
      const cameraPromised = this.unicoCamera
        .prepareDocumentCamera(this.unicoConfig, DocumentCameraTypes.RG_FRENTE_NOVO)
        .catch(() => console.error('Error initializing RG Frente Novo camera'));

      cameraPromised.then(cameraOpener => cameraOpener.open(this.callback));
    },
    async openDocumentCameraRGVersoNovo() {
      const cameraPromised = this.unicoCamera
        .prepareDocumentCamera(this.unicoConfig, DocumentCameraTypes.RG_VERSO_NOVO)
        .catch(() => console.error('Error initializing RG Verso Novo camera'));

      cameraPromised.then(cameraOpener => cameraOpener.open(this.callback));
    },
    async openDocumentCameraOutros() {
      const cameraPromised = this.unicoCamera
        .prepareDocumentCamera(this.unicoConfig, DocumentCameraTypes.OTHERS("Generic Document"))
        .catch(() => console.error('Error initializing other documents camera'));

      cameraPromised.then(cameraOpener => cameraOpener.open(this.callback));
    }
  },
  created() {
    this.cameraHandlers = {
      liveness: this.openSelfieCameraLiveness,
      cnh: this.openDocumentCameraCNH,
      cpf: this.openDocumentCameraCPF,
      cnh_frente: this.openDocumentCameraCNHFrente,
      cnh_verso: this.openDocumentCameraCNHVerso,
      rg_frente: this.openDocumentCameraRGFrente,
      rg_verso: this.openDocumentCameraRGVerso,
      rg_frente_novo: this.openDocumentCameraRGFrenteNovo,
      rg_verso_novo: this.openDocumentCameraRGVersoNovo,
      others: this.openDocumentCameraOutros,
    };
  }
}
</script>

<template>
  <div class="camera-capture">
    <div class="container">
      <div class="header">
        <h1>Biometric Capture</h1>
        <p class="subtitle">
          Choose the type of capture you need to perform. Make sure you're in a well-lit environment
          and your camera is enabled.
        </p>
      </div>

      <div v-if="error" class="error-alert" role="alert">
        <span class="font-medium">Error:</span>&nbsp;{{ error }}
      </div>

      <div v-if="loading" class="loading-overlay" aria-label="Loading camera">
        <div class="loading-container">
          <div class="loader"></div>
          <p>Initializing camera...</p>
        </div>
      </div>

      <div class="section">
        <div class="section-header">
          <svg class="section-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
            <circle cx="12" cy="13" r="4"></circle>
          </svg>
          <h2>Selfie Capture</h2>
        </div>
        <div class="features-grid single">
          <button
            v-for="(feature, index) in features"
            :key="index"
            @click="openCamera(feature.type)"
            class="feature-card"
            :disabled="loading"
          >
            <div class="feature-icon">
              <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
                <circle cx="12" cy="13" r="4"></circle>
              </svg>
            </div>
            <h3>{{ feature.title }}</h3>
            <p>{{ feature.description }}</p>
          </button>
        </div>
      </div>

      <div class="section">
        <div class="section-header">
          <svg class="section-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
            <line x1="16" y1="13" x2="8" y2="13"></line>
            <line x1="16" y1="17" x2="8" y2="17"></line>
            <polyline points="10 9 9 9 8 9"></polyline>
          </svg>
          <h2>Document Capture</h2>
        </div>
        <div class="features-grid">
          <button
            v-for="(feature, index) in documentFeatures"
            :key="index"
            @click="openCamera(feature.type)"
            class="feature-card"
            :disabled="loading"
          >
            <div class="feature-icon">
              <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
            </div>
            <h3>{{ feature.title }}</h3>
            <p>{{ feature.description }}</p>
          </button>
        </div>
      </div>

      <div id="box-camera"></div>
    </div>
  </div>
</template>