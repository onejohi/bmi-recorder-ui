<script setup>
import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>

  <ul class="nav justify-content-end">
    <li class="nav-item">
      <RouterLink to="/" class="nav-link active">Patient List</RouterLink>
    </li>
    <li class="nav-item">
      <RouterLink to="/about" class="nav-link active">New Visit</RouterLink>
    </li>
  </ul>

  <RouterView />
</template>

<style scoped>

</style>
