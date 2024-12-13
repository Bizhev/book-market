<template>
  <div class="app-panel">
    <div class="item">

      <ToggleButtons
          :buttons="totalPages"
          :active="currentPage"
          @select="catalogStore.setActiveStep"
      />
    </div>
    <div class="item">
      <input class="app-input" type="text" v-model="catalogStore.searchQuery" placeholder="Search...">
    </div>
    <div class="item">
      <ToggleButtons
          :buttons="TYPE_LAYOUT_LISTS"
          :active="activeTypeLayout"
          @select="catalogStore.setTypeLayout"
      />
    </div>

  </div>
</template>
<script lang="ts" setup>
import ToggleButtons from '@/components/buttons/toggleButtons/ToggleButtons.vue'
import {useCatalogStore} from "~/store/catalog";
import {computed} from "vue";
import {TypeLayout} from "~/store/interface";

const catalogStore = useCatalogStore();

const TYPE_LAYOUT_LISTS = [
  {
    text: 'Grid',
    value: TypeLayout.Grid
  },
  {
    text: 'List',
    value: TypeLayout.List
  },
]

const activeTypeLayout = computed(() => catalogStore.activeTypeLayout)
const currentPage = computed(() => catalogStore.currentPage)
const perPage = computed(() => catalogStore.perPage)
const totalPages = computed(() => {
  const count = Math.ceil(catalogStore.items?.length / perPage.value)
  const res: any[] = []
  for (let i = 1; i <= count; i++) {
    res.push({
      text: String(i),
      value: i,
    })
  }
  return res

})

</script>
<style lang="scss" scoped>

.app-input {
  width: 100%;
  max-width: 400px;
  padding: $input-padding;
  border: 2px solid $input-border-color;
  border-radius: $input-border-radius;
  background-color: $input-background-color;
  font-size: 16px;
  color: #333;
  outline: none;
  transition: all 0.3s ease;

  &:focus {
    border-color: $input-focus-border-color;
    box-shadow: 0 0 8px rgba(52, 152, 219, 0.4);
  }

  &::placeholder {
    color: $input-placeholder-color;
    font-style: italic;
  }

  &:hover {
    border-color: $input-border-color;
  }

  &:focus-visible {
    border-color: $input-focus-border-color;
    box-shadow: 0 0 8px rgba(52, 152, 219, 0.4);
  }
}

.app-panel {
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 10px;
}

.item {
  padding: 20px;
  text-align: center;
}
</style>
