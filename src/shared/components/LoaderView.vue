<template>
    <div class="loader card w-100 p-5"></div>
  </template>
  
  <script setup lang="ts">
  // No props or logic needed for a basic loader
  </script>
  
  <style scoped>
  .loader {
    background: linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%);
    background-size: 200% 100%; /* For the gradient animation */
    animation: loading 1.5s infinite; /* Infinite animation */
    margin: auto; /* Center the loader */
    border: none;
  }
  
  @keyframes loading {
    0% {
      background-position: 200% 0; /* Start position */
    }
    100% {
      background-position: 0 0; /* End position */
    }
  }
  </style>
  