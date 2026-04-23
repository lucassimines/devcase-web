<template>
  <section v-if="blocks?.length" :class="ui?.base">
    <BlockResolver
      v-for="(block, index) in blocks"
      :key="`${block.type}-${index}`"
      :block="block"
    />
  </section>
</template>

<script setup lang="ts">
import type { Block } from '~/types/block'

defineProps<{
  blocks: Block[] | undefined | null
  ui?: {
    base?: string
  }
}>()
</script>
