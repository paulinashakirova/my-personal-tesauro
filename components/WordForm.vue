<script setup lang="ts">
import { useWordStore } from "@/stores/CardStore.js";
import { useDateFormat } from "@vueuse/core";
import Button from "primevue/button";
import Calendar from "primevue/calendar";
import InputText from "primevue/inputtext";
import Textarea from "primevue/textarea";
import { ref } from "vue";

const store = useWordStore();

const word = ref({
  id: 1,
  name: "",
  pronunciation: "",
  definition: "",
  dateAdded: "",
});

function addWord() {
  incrementID();
  formatDate();
  const send = {
    id: word.value.id,
    name: word.value.name,
    pronunciation: word.value.pronunciation,
    definition: word.value.definition,
    dateAdded: word.value.dateAdded,
  };
  store.addWord(send);
  clearForm();
}

function formatDate() {
  const formatted = useDateFormat(word.value.dateAdded, "Do of MMM YYYY");
  word.value.dateAdded = formatted.value;
}

function incrementID() {
  word.value.id++;
}

function clearForm() {
  word.value.name = "";
  word.value.pronunciation = "";
  word.value.definition = "";
  word.value.dateAdded = "";
}
</script>

<template>
  <div class="flex flex-col m-4 gap-y-4 border rounded-md p-8 w-[500px]">
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
    <div class="flex">
      <label class="w-48">Date added</label>
      <Calendar class="w-full" v-model="word.dateAdded" dateFormat="dd/mm/yy" />
    </div>
    <div class="flex ml-auto">
      <Button label="Add" class="px-10" @click="addWord" />
    </div>
  </div>
</template>
