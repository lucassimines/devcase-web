<template>
  <h2 class="flex items-center gap-2 text-xl">
    <Icon v-if="icon" class="text-brand" :name="icon" />
    <span class="text-elevated" v-text="title" />
  </h2>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  icon?: string
}>()
</script>
