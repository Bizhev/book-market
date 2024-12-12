<template>
  <div>
    <SearchPanel> </SearchPanel>

    <CatalogList :items="items"/>
  </div>
</template>
<script setup lang="ts">
import { useCatalogStore } from '@/store/catalog';
import SearchPanel from "~/components/SearchPanel.vue";

const catalogStore = useCatalogStore();
const items = computed(() => catalogStore.filteredItems.length);

onMounted(
    async () => {
      await catalogStore.fetchBooks()
    }
)
</script>
<style scoped lang="scss">

</style>
