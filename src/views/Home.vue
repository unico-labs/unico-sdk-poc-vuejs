<template>
    <div class="home">
      <section class="hero">
        <h1>SDK Unico Vue.js</h1>
        <p>Experience fast and secure biometric capture with advanced technology that ensures accurate identity verification.</p>
        <router-link to="/capture" class="cta-button">Start Capture</router-link>
      </section>
  
      <section class="features">
        <div class="feature-card">
          <div class="feature-icon">
            <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
              <circle cx="12" cy="13" r="4"></circle>
            </svg>
          </div>
          <h3>Face Recognition</h3>
          <p>Advanced camera technology for precise facial recognition and authentication.</p>
        </div>
  
        <div class="feature-card">
          <div class="feature-icon">
            <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="2" ry="2"></rect>
              <circle cx="12" cy="12" r="3"></circle>
              <line x1="2" y1="12" x2="22" y2="12"></line>
              <line x1="12" y1="2" x2="12" y2="22"></line>
            </svg>
          </div>
          <h3>Liveness Detection</h3>
          <p>Ensure the person is physically present with sophisticated liveness checks.</p>
        </div>
  
        <div class="feature-card">
          <div class="feature-icon">
            <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
          </div>
          <h3>Secure Processing</h3>
          <p>All data is encrypted and processed following the highest security standards.</p>
        </div>
  
        <div class="feature-card">
          <div class="feature-icon">
            <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="16" y1="13" x2="8" y2="13"></line>
              <line x1="16" y1="17" x2="8" y2="17"></line>
              <polyline points="10 9 9 9 8 9"></polyline>
            </svg>
          </div>
          <h3>ID Verification</h3>
          <p>Capture and verify official documents with precision and accuracy.</p>
        </div>
      </section>
  
      <section class="why-us">
        <div class="content">
          <div class="info">
            <h2>Why Choose Our Solution?</h2>
            <p>Our biometric capture technology provides industry-leading accuracy while maintaining the highest privacy standards.</p>
            <ul class="benefits">
              <li>Fast and accurate capture process</li>
              <li>Multiple verification methods</li>
              <li>Seamless integration options</li>
              <li>Enterprise-grade security</li>
            </ul>
          </div>
          <div class="demo-card">
            <div class="demo-image">
              <svg class="demo-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
                <circle cx="12" cy="13" r="4"></circle>
              </svg>
            </div>
            <h3>Start in seconds</h3>
            <p>Begin capturing biometric data with just a few clicks.</p>
            <router-link to="/capture" class="try-button">Try Now</router-link>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <style scoped>
  .home {
    padding: 2rem 0;
  }
  
  .hero {
    text-align: center;
    max-width: 800px;
    margin: 0 auto 4rem;
    padding: 0 1rem;
  }
  
  .hero h1 {
    font-size: 3rem;
    color: var(--text-color);
    margin-bottom: 1.5rem;
    font-weight: bold;
  }
  
  .hero p {
    font-size: 1.25rem;
    color: var(--text-light);
    margin-bottom: 2rem;
  }
  
  .cta-button {
    display: inline-block;
    background: var(--primary-color);
    color: white;
    padding: 1rem 2rem;
    border-radius: 8px;
    font-weight: 500;
    text-decoration: none;
    transition: transform 0.2s, background-color 0.2s;
  }
  
  .cta-button:hover {
    background: var(--primary-hover);
    transform: translateY(-2px);
  }
  
  .features {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto 4rem;
    padding: 0 1rem;
  }
  
  .feature-card {
    background: white;
    padding: 2rem;
    border-radius: 12px;
    text-align: center;
    transition: transform 0.3s;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .feature-card:hover {
    transform: translateY(-5px);
  }
  
  .feature-icon {
    width: 56px;
    height: 56px;
    background: var(--primary-color);
    border-radius: 50%;
    margin: 0 auto 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .icon {
    width: 32px;
    height: 32px;
    color: white;
  }
  
  .feature-card h3 {
    color: var(--text-color);
    font-size: 1.25rem;
    margin-bottom: 1rem;
    font-weight: 600;
  }
  
  .feature-card p {
    color: var(--text-light);
    line-height: 1.6;
  }
  
  .why-us {
    background: #f8fafc;
    padding: 4rem 1rem;
    margin-bottom: 4rem;
  }
  
  .content {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
  }
  
  .info h2 {
    font-size: 2rem;
    color: var(--text-color);
    margin-bottom: 1.5rem;
    font-weight: bold;
  }
  
  .info p {
    color: var(--text-light);
    margin-bottom: 2rem;
    font-size: 1.125rem;
    line-height: 1.6;
  }
  
  .benefits {
    list-style: none;
    padding: 0;
  }
  
  .benefits li {
    color: var(--text-light);
    margin-bottom: 1rem;
    padding-left: 2rem;
    position: relative;
  }
  
  .benefits li::before {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 1rem;
    height: 1rem;
    background: var(--primary-color);
    border-radius: 50%;
    opacity: 0.2;
  }
  
  .demo-card {
    background: white;
    padding: 2rem;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
  
  .demo-image {
    background: linear-gradient(to right, var(--primary-color), var(--primary-hover));
    height: 200px;
    border-radius: 8px;
    margin-bottom: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .demo-icon {
    width: 64px;
    height: 64px;
    color: white;
  }
  
  .demo-card h3 {
    font-size: 1.5rem;
    color: var(--text-color);
    margin-bottom: 1rem;
    font-weight: 600;
  }
  
  .demo-card p {
    color: var(--text-light);
    margin-bottom: 1.5rem;
  }
  
  .try-button {
    display: block;
    background: var(--primary-color);
    color: white;
    padding: 1rem;
    border-radius: 8px;
    text-align: center;
    text-decoration: none;
    font-weight: 500;
    transition: background-color 0.2s;
  }
  
  .try-button:hover {
    background: var(--primary-hover);
  }
  
  @media (max-width: 768px) {
    .hero h1 {
      font-size: 2.5rem;
    }
  
    .content {
      grid-template-columns: 1fr;
      gap: 2rem;
    }
  
    .features {
      grid-template-columns: 1fr;
    }
  }
  </style>