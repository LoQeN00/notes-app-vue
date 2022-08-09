<template>
  <div class="w-[90%] mx-auto">
    <h1 class="text-3xl font-semibold text-sky-500 tracking-wide">STATS</h1>
    <div class="grid grid-cols-2 bg-white p-6 mt-5 rounded-xl shadow-xl gap-y-5">
      <div>
        <h2 class="font-semibold text-xl">Stat</h2>
      </div>
      <div class="font-semibold text-xl">
        <h2>Value</h2>
      </div>
      <Stat label="Total Notes" :value="totalNotes" />
      <Stat label="Total Words" :value="totalWords" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useNotesStore } from '@/stores/storeNotes';
import Stat from '@/components/Stat.vue';

const notesStore = useNotesStore();

const totalNotes = notesStore.getNotesCount.toString();

const totalWords = notesStore.getTotalWords.toString();
</script>
