<template>
  <nav class="navbar bg-body-tertiary">
    <div class="container container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>

      <ul class="nav justify-content-end">
        <li class="nav-item">
          <RouterLink to="/" class="nav-link active">Patient List</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/registration" class="nav-link active">New Visit</RouterLink>
        </li>
      </ul>
    </div>
  </nav>

  <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>
