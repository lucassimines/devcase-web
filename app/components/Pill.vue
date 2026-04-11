<template>
  <component
    :is="to ? 'NuxtLink' : 'button'"
    :type="to ? undefined : 'button'"
    :to="to"
    class="flex h-7 items-center justify-center rounded-md bg-emerald-500/20 px-2 text-emerald-500"
  >
    <span class="block font-mono text-sm" v-text="label" />
  </component>
</template>

<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router'

defineProps<{
  label: string
  to?: RouteLocationRaw
}>()
</script>
