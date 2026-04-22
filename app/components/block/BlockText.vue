<template>
  <Container :ui="{ inner: 'py-26' }">
    <div class="prose-lg" v-html="block.text" />
  </Container>
</template>

<script setup lang="ts">
import type { TextBlock } from '~/types/block'

defineProps<{
  block: TextBlock
}>()
</script>
