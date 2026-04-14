<template>
  <component :is="component" :block="block.content" />
</template>

<script setup lang="ts">
import { blockType, type Block } from '~/types/block'

const props = defineProps<{
  block: Block
}>()

const component = computed(() => {
  switch (props.block.type) {
    case blockType.IMAGE:
      return resolveComponent('BlockImage')
    case blockType.WEB:
      return resolveComponent('BlockWeb')
    case blockType.TEXT:
      return resolveComponent('BlockText')
    default:
      return null
  }
})
</script>
