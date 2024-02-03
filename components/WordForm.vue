<script setup lang="ts">
import { useWordStore } from "@/stores/CardStore.js";
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import Textarea from "primevue/textarea";
import { ref, watch } from "vue";
const store = useWordStore();

const word = ref({
  name: "",
  pronunciation: "",
  definition: "",
});
watch(
  word,
  () => {
    console.log("word", word);
  },
  { deep: true }
);
function addWord() {
  store.addWord(word.value);
  //   word.value.name = "";
  //   word.value.pronunciation = "";
  //   word.value.definition = "";
  console.log("clicked");
}
</script>

<template>
  <div class="flex flex-col m-4 gap-y-4">
    <p class="text-xl text-center font-bold">Add a new word</p>
    <div class="flex">
      <label class="w-48">Name</label>
      <InputText class="w-full" type="text" v-model="word.name" />
    </div>
    <div class="flex">
      <label class="w-48">Pronunciation</label>
      <InputText class="w-full" type="text" v-model="word.pronunciation" />
    </div>
    <div class="flex">
      <label class="w-48">Definition</label>
      <Textarea class="w-full" autoResize v-model="word.definition" />
    </div>
    <div class="flex ml-auto gap-4">
      <Button label="Reset" class="w-24" />
      <Button label="Add" class="w-24" @click="addWord" />
    </div>
  </div>
</template>
