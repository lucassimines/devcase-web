<template>
  <div :class="cn('animate-pulse rounded-md bg-gray-950', ui?.base)" />
</template>

<script setup lang="ts">
defineProps<{
  ui?: {
    base: string
  }
}>()
</script>
