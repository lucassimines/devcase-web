<template>
  <ContainerGrid>
    <ProseContent :content="$tr(block.text)" :ui="{ base: 'col-span-8' }" />
  </ContainerGrid>
</template>

<script setup lang="ts">
import type { TextBlock } from '~/types/block'

defineProps<{
  block: TextBlock
}>()
</script>
