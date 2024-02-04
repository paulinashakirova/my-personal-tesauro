import { defineStore } from "pinia";

export const useWordStore = defineStore("WordStore", {
  state: () => ({
    words: [{ name: "", pronunciation: "", definition: "" }],
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
  },
});
