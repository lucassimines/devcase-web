<template>
  <figure>
    <NuxtImg :src="image" :alt="name" />
  </figure>
</template>

<script setup lang="ts">
defineProps<{
  image: string
  name: string
}>()
</script>
