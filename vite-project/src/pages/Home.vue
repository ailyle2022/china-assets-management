<template>
    <div class="home">
      <h2>Welcome to the Home Page</h2>
      <p>This is the home page of your Vue + TypeScript app.</p>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'Home',
  });
  </script>
  
  <style scoped>
  .home {
    text-align: center;
    padding: 2rem;
  }
  </style>