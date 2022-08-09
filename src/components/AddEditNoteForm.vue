<script setup lang="ts">
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useNotesStore } from '@/stores/storeNotes';

const props = defineProps({
  mode: {
    type: String,
  },
});

const notesStore = useNotesStore();

const content = ref('');
const header = ref('');
const route = useRoute();
const router = useRouter();

if (props.mode === 'edit') {
  const noteId = parseInt(route.params.id as string);
  const noteData = notesStore.getNoteById(noteId);
  if (noteData) {
    content.value = noteData.content;
    header.value = noteData.header;
  }
}

const handleAddNewNote = (contentValue: string, headerValue: string) => {
  notesStore.addNote(contentValue, headerValue);

  content.value = '';
  header.value = '';
};

const handleEditNote = (contentValue: string, headerValue: string) => {
  notesStore.editNote(contentValue, headerValue, parseInt(route.params.id as string));

  router.push({ name: 'notes' });
};
</script>

<template>
  <div class="bg-sky-700 p-4 rounded-lg shadow-xl">
    <div class="mb-4 p-2">
      <label>
        <span class="mr-2 text-white">Note Header</span>
        <input class="w-[50%]" type="text" v-model="header" />
      </label>
    </div>
    <div>
      <textarea v-model="content" placeholder="Add a new note ..." class="w-full p-2" rows="10"></textarea>
    </div>
    <div class="space-x-4 my-4">
      <button
        v-if="mode === 'add'"
        class="px-4 py-2 bg-blue-400 text-white rounded-lg disabled:bg-blue-300"
        @click="handleAddNewNote(content, header)"
        :disabled="!content || !header"
      >
        Add new note
      </button>
      <button
        v-if="mode === 'edit'"
        class="px-4 py-2 bg-blue-400 text-white rounded-lg disabled:bg-blue-300"
        @click="handleEditNote(content, header)"
        :disabled="!content || !header"
      >
        Edit Note
      </button>
    </div>
  </div>
</template>
