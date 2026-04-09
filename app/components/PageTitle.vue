<template>
  <h2 class="font-mono text-3xl" v-text="`/${title}`" />
</template>

<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>
