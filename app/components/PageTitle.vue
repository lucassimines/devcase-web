<template>
  <h2 class="flex items-center gap-2 text-3xl">
    <Icon class="text-gray-800" :name="icon" />
    <span class="font-mono text-gray-100 uppercase" v-html="title" />
  </h2>
</template>

<script setup lang="ts">
defineProps<{
  icon: string
  title: string
}>()
</script>
