<template>
  <div>
    <NuxtImg :src="$imageUrl(block.image)" alt="Image" preset="lg" />
  </div>
</template>

<script setup lang="ts">
import type { ImageBlock } from '~/types/block'

defineProps<{
  block: ImageBlock
}>()
</script>
