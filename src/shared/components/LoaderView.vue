<template>
    <div class="loader card w-100 p-5"></div>
</template>
  
  
<style scoped>
  .loader {
    background: linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%);
    background-size: 200% 100%;
    animation: loading 1.5s infinite;
    margin: auto;
    border: none;
  }
  
@keyframes loading {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: 0 0; 
    }
}
</style>
  