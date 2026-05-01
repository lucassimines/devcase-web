<template>
  <Container :ui="{ inner: 'flex justify-center' }">
    <figure class="overflow-hidden rounded-md border border-white/10">
      <NuxtImg :src="$imageUrl(block.image)" alt="Image" preset="lg" />
    </figure>
  </Container>
</template>

<script setup lang="ts">
import type { ImageBlock } from '~/types/block'

defineProps<{
  block: ImageBlock
}>()
</script>
