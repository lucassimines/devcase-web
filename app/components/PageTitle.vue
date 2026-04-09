<template>
  <h2 class="text-2xl" v-text="title" />
</template>

<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>
