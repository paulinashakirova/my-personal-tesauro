<script setup lang="ts">
import { useWordStore } from "@/stores/CardStore.js";
const store = useWordStore();
</script>

<template>
  <h1 class="text-center font-bold text-3xl">Word of the Day</h1>
  <div class="flex flex-wrap gap-8 m-8">
    <div v-for="(word, index) in store.words" :key="word.id ? word.id : index">
      <CardComponent
        :id="word.id"
        :name="word.name"
        :pronunciation="word.pronunciation"
        :definition="word.definition"
      />
    </div>
  </div>
</template>
