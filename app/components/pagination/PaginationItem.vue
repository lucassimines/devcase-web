<template>
  <NuxtLink
    :to="to"
    class="flex size-7 cursor-pointer items-center justify-center rounded hover:bg-gray-700"
    :aria-label="typeof label === 'string' ? label : undefined"
  >
    <Icon v-if="icon" :name="icon" />

    <span v-else class="block font-mono text-sm leading-tight font-medium" v-text="label" />
  </NuxtLink>
</template>

<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router'

defineProps<{
  to: RouteLocationRaw
  label: string | number
  icon?: string
}>()
</script>
