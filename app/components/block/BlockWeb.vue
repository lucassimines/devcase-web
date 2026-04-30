<template>
  <ContainerGrid>
    <WindowUi
      v-if="block.image.desktop"
      :image="$imageUrl(block.image.desktop)"
      :ui="{ base: 'max-sm:hidden col-span-full' }"
    />

    <WindowUi
      v-if="block.image.mobile"
      :image="$imageUrl(block.image.mobile)"
      :ui="{ base: 'sm:hidden col-span-full' }"
    />
  </ContainerGrid>
</template>

<script setup lang="ts">
import type { WebBlock } from '~/types/block'

defineProps<{
  block: WebBlock
}>()
</script>
