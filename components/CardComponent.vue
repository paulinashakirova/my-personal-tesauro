<script setup lang="ts">
import { useWordStore } from "@/stores/CardStore.js";
import type { CardType } from "@/types/CardType";
import Button from "primevue/button";
import Card from "primevue/card";

const props = defineProps<CardType>();
const store = useWordStore();

function onDelete() {
  store.deleteWord(props.name);
}
</script>

<template>
  <Card style="width: 25rem; overflow: hidden">
    <template #header>
      <img
        alt="user header"
        src="https://primefaces.org/cdn/primevue/images/usercard.png"
      />
    </template>
    <template #title>Word: {{ props.name }}</template>
    <template #subtitle>Pronunciation: {{ props.pronunciation }}</template>
    <template #content>
      <p class="m-0">Definition: {{ props.definition }}</p>
      <p class="m-0">Added: {{ props.dateAdded }}</p>
    </template>
    <template #footer>
      <div class="flex gap-3 mt-1">
        <Button
          label="Delete"
          severity="secondary"
          class="w-full"
          @click="onDelete"
        />
        <!-- <Button label="Add" class="w-full" /> -->
      </div>
    </template>
  </Card>
</template>
