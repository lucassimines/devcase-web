<template>
  <Container :ui="{ inner: 'py-12' }">
    <div class="prose" v-html="block.text" />
  </Container>
</template>

<script setup lang="ts">
import type { TextBlock } from '~/types/block'

defineProps<{
  block: TextBlock
}>()
</script>
