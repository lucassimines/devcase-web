<template>
  <Container :ui="{ inner: 'flex justify-center' }">
    <figure class="w-full overflow-hidden rounded-md border border-white/10">
      <NuxtImg :src="$imageUrl(block.image)" alt="Image" preset="xl" class="h-auto w-full" />
    </figure>
  </Container>
</template>

<script setup lang="ts">
import type { ImageBlock } from '~/types/block'

defineProps<{
  block: ImageBlock
}>()
</script>
