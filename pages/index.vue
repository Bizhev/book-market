<template>
  <div>
    <SearchPanel />
    <CatalogList />
  </div>
</template>
<script setup lang="ts">
import { useCatalogStore } from '@/store/catalog';
import SearchPanel from "~/components/SearchPanel.vue";

const catalogStore = useCatalogStore();

onMounted(
    async () => {
      await catalogStore.fetchBooks()
    }
)
</script>
<style scoped lang="scss">

</style>
