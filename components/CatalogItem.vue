<template>
  <div class="catalog-item">
    <div class="image-container">
      <img :src="item.imgUrl" :alt="item.title" width="64" />
    </div>
    <div class="info-container">
      <h3 class="title">{{ item.title }}</h3>
      <p>Published Date: {{ item.date }}</p>
      <p>Country: {{ item.country }}</p>
      <p>Author: {{ item.authors }}</p>
      <p>ID: {{ item.id }}</p>
      <NuxtLink class="read-more" :to="`/item/${item.id}`">Read more</NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import type {IBook} from "~/store/interface";
defineProps<{ item: IBook }>();
</script>

<style scoped>
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
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-size: 0.9rem;
  transition: background-color 0.3s ease;
}

.read-more:hover {
  background-color: #0056b3;
}
</style>
