<script setup>
import { RouterLink, RouterView } from 'vue-router'
import SectionNavigation from './components/SectionNavigation.vue';
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/projects">Projects</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
      </nav>
    </div>
  </header>
  <SectionNavigation />
  
  <RouterView />
</template>

<style lang="scss">
</style>
