<template>
  <h2 class="text-3.5xl flex items-center gap-6 font-mono tracking-tight">
    <span v-html="title" />
  </h2>
</template>

<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>
