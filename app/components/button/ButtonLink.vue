<template>
  <NuxtLink
    class="hover:text-brand text-elevated font-mono text-xl font-thin md:text-2xl"
    :to="to"
    >{{ `/${text}` }}</NuxtLink
  >
</template>

<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router'

defineProps<{
  to?: RouteLocationRaw
  text: string
}>()
</script>
