<template>
  <div
    :class="cn('relative min-h-100 overflow-hidden rounded-xl border border-white/10', ui?.base)"
  >
    <div class="bg-white/10 px-4 py-2.5">
      <div class="flex grow items-center gap-2 [&>div]:size-3 [&>div]:rounded-full">
        <div class="bg-red-500" />
        <div class="bg-yellow-500" />
        <div class="bg-green-500" />
      </div>
    </div>

    <NuxtImg :src="image" alt="Image" class="h-auto w-full" />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  image: string
  ui?: {
    base: string
  }
}>()
</script>
