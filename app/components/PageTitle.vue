<template>
  <h2 class="font-mono text-3xl" v-html="formattedTitle" />
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string
}>()

function toSnakeCase(title: string) {
  return title.toLowerCase().replace(/ /g, '<i class="text-gray-600">_</i>')
}

const formattedTitle = computed(() => {
  return `<i class="text-primary-600">/</i>${toSnakeCase(props.title)}`
})
</script>
