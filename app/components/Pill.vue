<template>
  <component
    :is="to ? NuxtLink : 'button'"
    :type="to ? undefined : 'button'"
    :to="to"
    :target="to ? '_blank' : undefined"
    class="flex h-7 items-center justify-center rounded-full px-2.5"
    :class="pill({ color })"
  >
    <span class="block text-sm font-semibold" v-text="label" />
  </component>
</template>

<script setup lang="ts">
import { NuxtLink } from '#components'
import type { RouteLocationRaw } from 'vue-router'

interface Props {
  label: string
  to?: RouteLocationRaw | null
  color?: 'green' | 'gray'
}

const props = withDefaults(defineProps<Props>(), {
  color: 'gray'
})

const pill = tv({
  base: props.to ? 'cursor-pointer' : 'pointer-events-none',
  variants: {
    color: {
      green: 'bg-emerald-950 text-emerald-400 hover:bg-emerald-500/30',
      gray: 'bg-gray-800 text-gray-300 hover:bg-gray-700'
    }
  }
})
</script>
