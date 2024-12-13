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
import {TypeLayout, useCatalogStore} from "~/store/catalog";
import {computed} from "vue";

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
.app-panel {
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 10px;
}

.app-input {
  width: 100%;
  outline: none;
  border: none;
}

.item {
  padding: 20px;
  text-align: center;
}
</style>
