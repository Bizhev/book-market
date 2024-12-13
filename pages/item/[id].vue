<template>

  <div>
    <NuxtLink to="/">Main page</NuxtLink>
    <pre>{{ item }}</pre>
  </div>
</template>

<script setup lang="ts">
import {useRoute} from 'vue-router';
import {useCatalogStore} from '@/store/catalog';

const route = useRoute();
const catalogStore = useCatalogStore();
const item = computed(() => {
      console.log(catalogStore)
      return catalogStore.books.find((el) => el.id === route.params.id)
    }
);
</script>
