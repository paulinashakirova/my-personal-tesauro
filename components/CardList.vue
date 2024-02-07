<script setup lang="ts">
const props = defineProps<{ wordsCurrentPage: any }>();
</script>

<template>
  <h1 class="text-center font-bold text-3xl">Word of the Day</h1>
  <div class="flex flex-wrap gap-8 m-8">
    <div v-for="word in props.wordsCurrentPage" :key="word.id">
      <CardComponent
        :id="word.id"
        :name="word.name"
        :pronunciation="word.pronunciation"
        :definition="word.definition"
        :date-added="word.dateAdded"
      />
    </div>
  </div>
</template>
