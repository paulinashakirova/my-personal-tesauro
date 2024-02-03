<script setup lang="ts">
import Card from "primevue/card";

interface Props {
  name: String;
  pronunciation: String;
  definition: String;
}
const props = defineProps<Props>();
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
    </template>
    <template #footer>
      <div class="flex gap-3 mt-1">
        <!-- <Button label="Delete" severity="secondary" outlined class="w-full" /> -->
        <!-- <Button label="Add" class="w-full" /> -->
      </div>
    </template>
  </Card>
</template>
