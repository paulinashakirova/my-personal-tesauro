import { defineStore } from "pinia";

export const useWordStore = defineStore("WordStore", {
  state: () => ({
    words: [
      {
        id: 0,
        name: "Here you can add a word's title",
        pronunciation: "Here you can add a word's pronunciation",
        definition: "Here you can add a word's definition",
        dateAdded: "",
      },
    ],
  }),
  persist: true,
  getters: {
    wordsCount(state) {
      return state.words.length;
    },
  },
  actions: {
    addWord(word) {
      this.words.push(word);
    },
    deleteWord(name) {
      const indexOfwordToDelete = this.words.findIndex(
        (word) => word.name === name
      );
      this.words.splice(indexOfwordToDelete, 1);
    },
  },
});
