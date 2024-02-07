<script setup lang="ts">
import { useWordStore } from "@/stores/CardStore.js";
import Paginator from "primevue/paginator";

const store = useWordStore();
const router = useRouter();

const dataSource = ref(store.words);
const pageParams = ref({
  perPage: 10,
  page: 1,
  first: 0,
});

const wordsCurrentPage = computed(() => {
  return dataSource.value.slice(
    pageParams.value.first,
    pageParams.value.first + Number(pageParams.value.perPage)
  );
});

function onChange(data: any) {
  pageParams.value.perPage = Number(data.rows);
  pageParams.value.page = data.page + 1;
  pageParams.value.first = data.first;
  router.push({
    query: {
      page: (data.page + 1).toString(),
      perPage: data.rows.toString() ?? 23,
    },
  });
}

const paginate = (page: number, perPage?: number) => {
  router.push({
    query: {
      page: page.toString(),
      perPage: perPage?.toString() ?? 23,
    },
  });
};

onBeforeMount(() => {
  dataSource.value = store.words;
  paginate(pageParams.value.page, pageParams.value.perPage);
});
</script>

<template>
  <div class="m-8 md:m-16 flex flex-col items-center">
    <CardList :words-current-page="wordsCurrentPage" />
    <Paginator
      class="mx-auto"
      :rows="10"
      :totalRecords="store.wordsCount"
      template="FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink RowsPerPageDropdown"
      currentPageReportTemplate="Showing {first} to {last} of {totalRecords}"
      :rowsPerPageOptions="[10, 20, 30]"
      v-on:page="onChange($event)"
    />
    <WordForm />
  </div>
</template>
