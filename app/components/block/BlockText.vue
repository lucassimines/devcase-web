<template>
  <ContainerGrid>
    <div class="prose-base sm:prose-lg col-span-8" v-html="$tr(block.text)" />
  </ContainerGrid>
</template>

<script setup lang="ts">
import type { TextBlock } from '~/types/block'

defineProps<{
  block: TextBlock
}>()
</script>
