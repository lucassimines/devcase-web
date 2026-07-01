<template>
  <div
    :class="
      cn(
        'prose prose-base prose-invert sm:prose-lg prose-p:text-gray-50 prose-strong:text-gray-50 prose-pre:overflow-x-auto prose-pre:bg-gray-900 prose-img:max-w-full prose-table:block prose-table:max-w-full prose-table:overflow-x-auto max-w-full min-w-0',
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
