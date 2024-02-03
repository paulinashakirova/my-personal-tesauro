import { defineStore } from "pinia";

export const useWordStore = defineStore("WordStore", {
  state: () => ({
    words: [
      {
        name: "Superpower",
        pronunciation: "/ˈsuːpəˌpaʊə/",
        definition: "an exceptional or extraordinary power or ability.",
      },
      {
        name: "Smart Cookie",
        pronunciation: "/ˌsmɑːt ˈkʊk.i/",
        definition: "a clever person who makes good decisions.",
      },
    ],
  }),
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
