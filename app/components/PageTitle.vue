<template>
  <h2 class="text-3.5xl flex items-center gap-6">
    <span v-html="title" />
  </h2>
</template>

<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>
