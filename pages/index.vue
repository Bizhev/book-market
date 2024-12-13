<template>
  <div>
    <SearchPanel />
    <p v-if="loading">Загрузка...</p>
    <pre>{{ data }}</pre>
    <pre>{{ error }}</pre>
    <pre>{{ loading }}</pre>
    <CatalogList />
  </div>
</template>
<script setup lang="ts">
import { useCatalogStore } from '@/store/catalog';
import SearchPanel from "~/components/SearchPanel.vue";
// import { useFetchData } from '@/composables/useFetchData';
//
// const { data, error, loading, fetchData } = useFetchData();


const catalogStore = useCatalogStore();

onMounted(
    // async () => {
    //   await fetchData()
    // }
    async () => {
      await catalogStore.fetchBooks()
    }
)
</script>
<style scoped lang="scss">

</style>
