<template>
  <div
    :class="
      cn('relative min-h-140 w-full overflow-hidden rounded-xl border border-gray-900', ui?.base)
    "
  >
    <div class="flex items-center justify-between border-b border-gray-900 bg-gray-950 px-4 py-2.5">
      <div class="flex grow items-center gap-2 [&>div]:size-3 [&>div]:rounded-full">
        <div class="bg-red-500" />
        <div class="bg-yellow-500" />
        <div class="bg-green-500" />
      </div>

      <div v-if="title">
        <span class="block font-mono text-xs text-gray-500" v-text="title" />
      </div>
    </div>

    <NuxtImg :src="image" alt="Image" class="h-auto w-full" />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  image: string
  title?: string
  ui?: {
    base: string
  }
}>()
</script>
