<script setup lang="ts">
import { RouterView, RouterLink } from 'vue-router';
import Navigation from '@/components/Navigation.vue';
</script>

<template>
  <Navigation />
  <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-5">
    <RouterView />
  </div>
</template>
