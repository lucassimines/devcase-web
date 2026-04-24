<template>
  <Container :ui="{ inner: 'flex items-start gap-16' }">
    <WindowUi
      v-if="block.image.desktop"
      :image="$imageUrl(block.image.desktop)"
      :ui="{ base: 'max-sm:hidden' }"
    />

    <WindowUi
      v-if="block.image.mobile"
      :image="$imageUrl(block.image.mobile)"
      :ui="{ base: 'max-w-sm sm:hidden' }"
    />
  </Container>
</template>

<script setup lang="ts">
import type { WebBlock } from '~/types/block'

defineProps<{
  block: WebBlock
}>()
</script>
