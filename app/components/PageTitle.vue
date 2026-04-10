<template>
  <h2 class="flex items-center gap-2 font-sans text-2xl">
    <span v-html="formattedTitle" />
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
  return `${toSnakeCase(props.title)}<span class="text-brand-alt">/</span>`
})
</script>
