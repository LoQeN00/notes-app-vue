<script setup lang="ts">
import { useRoute } from 'vue-router';
import AddEditNoteForm from '@/components/AddEditNoteForm.vue';

const route = useRoute();
</script>

<template>
  <div>
    <h1>Edit Note</h1>
    <AddEditNoteForm mode="edit" />
  </div>
</template>
