<template>
  <div
    :class="
      cn(
        'prose prose-base prose-invert sm:prose-lg prose-p:text-gray-50 prose-strong:text-gray-50 prose-pre:bg-gray-900',
        ui?.base
      )
    "
    v-html="$tr(content)"
  />
</template>

<script setup lang="ts">
defineProps<{
  content: string
  ui?: {
    base?: string
  }
}>()
</script>
