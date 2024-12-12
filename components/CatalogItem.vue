<template>
  <div class="catalog-item">
    <h3>{{ item.id }}</h3>
    <button @click="$emit('select', item)">Read more</button>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  item: {
    id: number,
  }
}
>();
</script>

<style scoped>
.catalog-item {
  display: flex;
  flex-direction: column;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
