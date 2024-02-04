<script setup lang="ts">
import { useWordStore } from "@/stores/CardStore.js";
const store = useWordStore();
</script>

<template>
  <h3 class="text-center text-3xl underline">Word of the Day</h3>
  <!-- loop through all card components -->
  <div class="flex flex-wrap gap-8 m-8">
    <div v-for="word in store.words" :key="word.name">
      <CardComponent
        :name="word.name"
        :pronunciation="word.pronunciation"
        :definition="word.definition"
      />
      <!-- <CardComponent />
    <CardComponent />
    <CardComponent /> -->
    </div>
  </div>
  <h4>after card</h4>
</template>
