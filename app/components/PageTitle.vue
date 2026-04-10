<template>
  <h2 class="flex items-center gap-2 text-3xl">
    <span class="text-brand-alt" v-text="'['" />
    <span class="text-gray-100" v-html="formattedTitle" />
    <span class="text-brand-alt" v-text="']'" />
  </h2>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string
}>()

function toSnakeCase(title: string) {
  return title.toLowerCase().replace(/ /g, '<span class="text-gray-700">_</span>')
}

const formattedTitle = computed(() => {
  return `${toSnakeCase(props.title)}`
})
</script>
