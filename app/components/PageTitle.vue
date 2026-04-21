<template>
  <h2 class="flex items-center gap-6 font-mono text-4xl">
    <span v-html="title" />
  </h2>
</template>

<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>
