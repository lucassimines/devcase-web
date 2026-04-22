<template>
  <component
    :is="to ? NuxtLink : 'button'"
    :type="to ? undefined : 'button'"
    :to="to"
    :target="to ? '_blank' : undefined"
    class="flex h-7 items-center justify-center rounded-full px-2.5"
    :class="pill({ color })"
  >
    <span class="block font-mono text-sm" v-text="label" />
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
      green: 'bg-emerald-500/20 text-emerald-500 hover:bg-emerald-500/30',
      gray: 'text-default bg-gray-800 hover:bg-gray-700'
    }
  }
})
</script>
