<template>
  <nav class="navbar bg-body-tertiary">
    <div class="container container-fluid">
      <a class="navbar-brand" href="#">
        BMI Tracker
      </a>

      <ul class="nav justify-content-end">
        <li class="nav-item">
          <RouterLink to="/" class="nav-link active">Patients</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/registration" class="btn btn-primary text-white">
            <i class="bi bi-plus-lg me-1"></i>
            New Visit
          </RouterLink>
        </li>
      </ul>
    </div>
  </nav>

  <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>
