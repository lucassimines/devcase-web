<template>
  <Container :ui="{ inner: 'flex justify-center' }">
    <figure class="overflow-hidden rounded-xl border border-white/10">
      <NuxtImg
        :src="$imageUrl(block.image)"
        alt="Image"
        densities="1"
        class="block h-auto max-w-full"
      />
    </figure>
  </Container>
</template>

<script setup lang="ts">
import type { ImageBlock } from '~/types/block'

defineProps<{
  block: ImageBlock
}>()
</script>
