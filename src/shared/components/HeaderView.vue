<template>
    <div class="bg-primary d-flex justify-content-center w-100 p-3">
      <div class="w-75 d-flex justify-content-between">
        <div class="badge text-wrapper bg-white">
          <h6 class="fs-3 text-primary">
            <i class="bi bi-twitter p-2" />twit-twit
          </h6>
        </div>
        <div>
          <router-link to="/" class="fs-6 fw-bold text-decoration-none text-white me-2" active-class="text-decoration-underline">
            Home
          </router-link>
          <router-link :to="`/user/${userId}`" class="fs-6 fw-bold text-decoration-none text-white me-2" active-class="text-decoration-underline">
            My Page
          </router-link>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { userId } from '../values';
  </script>

  