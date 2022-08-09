<template>
  <div>
    <h2>{{ label }}</h2>
  </div>
  <div>
    <h2>{{ value }}</h2>
  </div>
</template>

<script setup lang="ts">
defineProps({
  label: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
});
</script>
