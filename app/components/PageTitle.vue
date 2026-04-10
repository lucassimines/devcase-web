<template>
  <h2 class="flex items-center gap-2 font-sans text-2xl">
    <span v-html="title" />
  </h2>
</template>

<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>
