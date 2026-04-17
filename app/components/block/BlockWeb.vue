<template>
  <Container :ui="{ inner: 'flex flex-col items-center gap-16' }">
    <WindowUi v-if="block.image.desktop" :image="$imageUrl(block.image.desktop)" title="Desktop" />

    <WindowUi
      v-if="block.image.mobile"
      :image="$imageUrl(block.image.mobile)"
      title="Mobile"
      :ui="{ base: 'max-w-sm' }"
    />
  </Container>
</template>

<script setup lang="ts">
import type { WebBlock } from '~/types/block'

defineProps<{
  block: WebBlock
}>()
</script>
