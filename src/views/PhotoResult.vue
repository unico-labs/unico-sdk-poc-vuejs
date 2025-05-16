<template>
  <div class="result-container">
    <div class="result-card">
      <h1 class="result-title">Capture Result</h1>
      
      <div class="image-container">
        <img 
          v-if="base64" 
          :src="imageSource" 
          alt="Captured photo" 
          class="captured-image" 
          @error="handleImageError"
        />
        <div v-else class="no-image">No image data available</div>
      </div>
      
      <div class="info-section">
        <h2 class="info-title">Image Information</h2>
        <div class="info-item">
          <span class="info-label">JWT Token:</span>
          <div class="jwt-container">
            <p class="jwt-text">{{ truncatedJwt }}</p>
            <button @click="copyToClipboard(jwt)" class="copy-button">
              Copy
            </button>
          </div>
        </div>
      </div>
      
      <div class="actions">
        <button @click="goBack" class="back-button">
          <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
          Back to Capture
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PhotoResult',
  props: {
    base64: {
      type: String,
      default: null
    },
    jwt: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      imageError: false
    }
  },
  computed: {
    truncatedJwt() {
      if (!this.jwt) return 'No JWT data available';
      return this.jwt.length > 50 ? this.jwt.substring(0, 47) + '...' : this.jwt;
    },
    imageSource() {
      if (!this.base64) return '';
      // Check if the base64 string already includes the data URL prefix
      return this.base64.startsWith('data:') 
        ? this.base64 
        : `data:image/jpeg;base64,${this.base64}`;
    }
  },
  methods: {
    goBack() {
      this.$router.push({ name: 'CameraCapture' });
    },
    copyToClipboard(text) {
      if (!text) return;
      
      navigator.clipboard.writeText(text)
        .then(() => {
          alert('Copied to clipboard!');
        })
        .catch(err => {
          console.error('Failed to copy:', err);
          // Fallback to older method
          const textarea = document.createElement('textarea');
          textarea.value = text;
          document.body.appendChild(textarea);
          textarea.select();
          document.execCommand('copy');
          document.body.removeChild(textarea);
          alert('Copied to clipboard!');
        });
    },
    handleImageError(e) {
      console.error('Error loading image:', e);
      this.imageError = true;
    }
  },
  mounted() {
    if (this.base64) {
      console.log('Base64 data length:', this.base64.length);
      console.log('Base64 data preview:', this.base64.substring(0, 50) + '...');
    }
  }
}
</script>

<style scoped>
.result-container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-height: 100vh;
  padding: 2rem 1rem;
  background-color: #f3f8fb;
}

.result-card {
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  padding: 2rem;
  width: 100%;
  max-width: 36rem;
}

.result-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 1.5rem;
  text-align: center;
}

.image-container {
  margin-bottom: 1.5rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.375rem;
  overflow: hidden;
  background-color: #f9fafb;
  min-height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.captured-image {
  width: 100%;
  height: auto;
  display: block;
  max-height: 500px;
  object-fit: contain;
}

.no-image {
  padding: 4rem 2rem;
  text-align: center;
  color: #6b7280;
}

.info-section {
  margin-bottom: 1.5rem;
}

.info-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 1rem;
}

.info-item {
  margin-bottom: 0.75rem;
}

.info-label {
  display: block;
  font-weight: 500;
  color: #4b5563;
  margin-bottom: 0.25rem;
}

.jwt-container {
  display: flex;
  align-items: center;
  background-color: #f9fafb;
  border: 1px solid #e5e7eb;
  border-radius: 0.375rem;
  padding: 0.5rem;
}

.jwt-text {
  flex: 1;
  font-family: monospace;
  word-break: break-all;
  margin: 0;
  padding-right: 0.5rem;
}

.copy-button {
  background-color: #0384fc;
  color: white;
  border: none;
  border-radius: 0.25rem;
  padding: 0.25rem 0.5rem;
  font-size: 0.75rem;
  cursor: pointer;
  transition: background-color 0.2s;
}

.copy-button:hover {
  background-color: #0369a1;
}

.actions {
  margin-top: 2rem;
  display: flex;
  justify-content: center;
}

.back-button {
  display: flex;
  align-items: center;
  background-color: #0384fc;
  color: white;
  border: none;
  border-radius: 0.375rem;
  padding: 0.625rem 1.25rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;
}

.back-button:hover {
  background-color: #0369a1;
}

.icon {
  width: 1rem;
  height: 1rem;
  margin-right: 0.5rem;
}
</style>