<template>
  <div :class="isGrid ? 'grid' : 'list'">
    <CatalogItem
        v-for="item in filteredItems"
        :key="item.id"
        :item="item"
        @select="handleSelect"
    />
  </div>
</template>

<script setup lang="ts">
import CatalogItem from './CatalogItem.vue';
import { useCatalogStore } from '@/store/catalog';

const catalogStore = useCatalogStore();
const isGrid = ref(true);

const filteredItems = computed(() => catalogStore.filteredItems);

const handleSelect = (item: unknown) => {
  console.log('SELECTED', item);
};
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
}
.list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
