<script setup lang="ts">
import { computed } from 'vue';
import { RouterLink } from 'vue-router';
import { useNotesStore } from '@/stores/storeNotes';

const props = defineProps({
  header: {
    type: String,
    default: 'Note',
  },
  content: {
    type: String,
    required: true,
  },
  id: {
    type: Number,
    required: true,
  },
});

const notesStore = useNotesStore();

const words = computed(() => {
  return props.content.split(' ').length;
});

const noteLink = computed(() => {
  return `/editNote/${props.id}`;
});
</script>

<template>
  <div class="bg-white rounded-xl shadow-xl">
    <div class="border-b-2 border-gray-200 p-4">
      <header class="flex justify-between">
        <p class="font-bold">{{ header }}</p>
        <small>{{ words }} characters</small>
      </header>
    </div>
    <div>
      <div class="p-6 border-b-2 border-gray-200">
        <article class="max-w-[100%] break-all">
          {{ content }}
        </article>
      </div>
      <footer class="">
        <div class="flex justify-around divide-x-2">
          <RouterLink class="w-full text-center" :to="noteLink">
            <a class="p-4 text-blue-600 font-bold block">Edit</a>
          </RouterLink>

          <button class="w-full p-4 text-blue-600 font-bold" @click="notesStore.deleteNote(id)">Delete</button>
        </div>
      </footer>
    </div>
  </div>
</template>
