<template>
  <Container>
    <div class="prose-base sm:prose-lg" v-html="block.text" />
  </Container>
</template>

<script setup lang="ts">
import type { TextBlock } from '~/types/block'

defineProps<{
  block: TextBlock
}>()
</script>
