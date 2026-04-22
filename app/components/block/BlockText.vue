<template>
  <Container :ui="{ inner: 'py-26' }">
    <div class="prose-lg max-w-4xl" v-html="block.text" />
  </Container>
</template>

<script setup lang="ts">
import type { TextBlock } from '~/types/block'

defineProps<{
  block: TextBlock
}>()
</script>
