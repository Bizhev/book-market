<template>
  <div :class="getLayoutStyle">
    <CatalogItem
        v-for="item in items"
        :key="item.id"
        :item="item"
        @select="handleSelect"
    />
  </div>
</template>

<script setup lang="ts">
import CatalogItem from './CatalogItem.vue';
import {TypeLayout, useCatalogStore} from '@/store/catalog';
import {computed} from "vue";

const catalogStore = useCatalogStore();

const items = computed(() => catalogStore.itemsWithPagination);
const getLayoutStyle = computed(() => {
      return catalogStore.activeTypeLayout === TypeLayout.Grid ? 'grid' : 'list'
    }
)

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
