<template>
  <h2 class="flex items-center gap-3 font-mono text-4xl">
    <span v-html="title" />

    <span class="text-gray-700" v-text="'_'" />
  </h2>
</template>

<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>
