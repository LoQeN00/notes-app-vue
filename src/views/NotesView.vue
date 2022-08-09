<template>
  <div class="p-4">
    <h1 class="mb-10">NOTES VIEW</h1>
    <div class="space-y-6">
      <AddEditNoteForm mode="add" />
      <Note
        v-for="note in notesStore.notes"
        :key="note.id"
        :content="note.content"
        :header="note.header"
        :id="note.id"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import Note from '@/components/Note.vue';
import AddEditNoteForm from '@/components/AddEditNoteForm.vue';
import { useNotesStore } from '@/stores/storeNotes';

const notesStore = useNotesStore();
</script>
