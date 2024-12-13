<template>
  <button
      class="app-button"
      v-for="button in buttons"
      :key="button.value"
      :class="{active: button.value === active}"
      @click="emits('select', button.value)"
  >
    {{button.text}}
  </button>
</template>
<script lang="ts" setup>
defineProps<{
  buttons: [
    {
      text: string,
      value: unknown
    }
  ],
  active: unknown
}
>();

const emits = defineEmits<{
  (event: 'select', value: unknown): void
}>();

</script>
<style lang="scss" scoped>
.app-button {
  cursor: pointer;
  border: none;
}
.active {
  background-color: $primary;
  color: $light-text;
}
</style>
