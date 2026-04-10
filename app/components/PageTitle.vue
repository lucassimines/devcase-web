<template>
  <h2 class="flex items-center gap-2 font-mono text-3xl">
    <span v-html="formattedTitle" />
  </h2>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string
}>()

function toSnakeCase(title: string) {
  return title.toLowerCase().replace(/ /g, '<i class="text-gray-600">_</i>')
}

const formattedTitle = computed(() => {
  return toSnakeCase(props.title)
})
</script>
