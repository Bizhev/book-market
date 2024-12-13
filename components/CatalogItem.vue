<template>
  <div class="catalog-item">
    <div class="image-container">
      <img :src="item.imgUrl" :alt="item.title" width="64"/>
    </div>
    <div class="info-container">
      <h3 class="title" v-html="highlightText(item.title,searchQuery)"></h3>
      <p>Published Date: <span v-html="highlightText(item.date,searchQuery)"></span></p>
      <p>Country: <span v-html="highlightText(item.country,searchQuery)"></span></p>
      <p>Author: <span v-html="highlightText(item.authors,searchQuery)"></span></p>
      <p>ID: <span v-html="highlightText(item.id,searchQuery)"></span></p>
      <NuxtLink class="read-more" :to="`/item/${item.id}`">Read more</NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import type {IBook} from "~/store/interface";
import {useCatalogStore} from "~/store/catalog";

const catalogStore = useCatalogStore();
defineProps<{ item: IBook }>();
const searchQuery = computed(() => catalogStore.searchQuery)

const highlightText = (text: string, targetString: string): string => {
  return targetString && text.replaceAll(targetString, `<span class='highlight'>${targetString}</span>`) || text
}

</script>

<style lang="scss">
.catalog-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 10px;
  background-color: #f9f9f9;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.catalog-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}

.image-container {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
}

.image-container img {
  max-width: 100%;
  height: auto;
  border-radius: $border-radius;
}

.info-container {
  text-align: center;
}

.read-more {
  display: inline-block;
  padding: 8px 12px;
  background-color: #007bff;
  color: $white;
  text-decoration: none;
  border-radius: 5px;
  font-size: 0.9rem;
  transition: background-color 0.3s ease;
}

.read-more:hover {
  background-color: #0056b3;
}

.highlight {
  background-color: $accent;
}
</style>
