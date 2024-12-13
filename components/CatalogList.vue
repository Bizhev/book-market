<template>
  <div :class="getLayoutStyle">
    <CatalogItem
        v-for="item in items"
        :key="item.id"
        :item="item"
    />
  </div>
</template>

<script setup lang="ts">
import CatalogItem from './CatalogItem.vue';
import {useCatalogStore} from '@/store/catalog';
import {computed} from "vue";
import {TypeLayout} from "~/store/interface";

const catalogStore = useCatalogStore();

const items = computed(() => catalogStore.itemsWithPagination);
const getLayoutStyle = computed(() => {
      return catalogStore.activeTypeLayout === TypeLayout.Grid ? 'grid' : 'list'
    }
)

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
