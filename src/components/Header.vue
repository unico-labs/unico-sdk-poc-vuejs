<template>
    <header class="header">
      <div class="container">
        <img src="/unico-logo.svg" alt="Unico Logo" class="logo" />
        <router-link to="/" class="home-button">Home</router-link>
      </div>
    </header>
  </template>
  
  <style scoped>
  .header {
    background: white;
    padding: 1rem 0;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .logo {
    height: 56px;
    width: auto;
  }
  
  .home-button {
    background: var(--primary-color);
    color: white;
    padding: 0.5rem 1.5rem;
    border-radius: 6px;
    text-decoration: none;
    font-weight: 500;
    transition: background-color 0.2s;
  }
  
  .home-button:hover {
    background: var(--primary-hover);
  }
  </style>