import { defineStore } from 'pinia';

export const useNotesStore = defineStore('notes', {
  state: () => {
    return {
      notes: [
        {
          id: 1,
          header: 'Note 1',
          content:
            'Amet deserunt Lorem dolore do elit reprehenderit nulla labore. Et eu sit voluptate nulla Lorem. Irure dolor pariatur consequat magna non elit sunt velit culpa adipisicing minim esse. Ullamco adipisicing adipisicing aliqua minim aliqua. Sunt veniam exercitation laborum Lorem id veniam ad aute esse commodo dolore. Id incididunt esse Lorem labore ullamco dolor. Ipsum cillum ea amet laborum duis eu laboris.',
        },
        {
          id: 2,
          header: 'Note 2',
          content: 'Pariatur reprehenderit in anim magna incididunt mollit anim cillum do.',
        },
      ],
    };
  },
  actions: {
    addNote(content: string, header: string) {
      const newNote = {
        id: this.notes.length + 1,
        content,
        header,
      };

      this.notes.unshift(newNote);
    },
    deleteNote(id: number) {
      this.notes = this.notes.filter((note) => note.id !== id);
    },
    editNote(content: string, header: string, id: number) {
      const index = this.notes.findIndex((note) => note.id === id);
      this.notes[index].content = content;
      this.notes[index].header = header;
    },
  },
  getters: {
    getNoteById: (state) => {
      return (id: number) => {
        return state.notes.find((note) => note.id === id);
      };
    },
    getNotesCount: (state) => {
      return state.notes.length;
    },
    getTotalWords: (state) => {
      return state.notes.reduce((acc, note) => {
        return acc + note.content.split(' ').length;
      }, 0);
    },
  },
});
