<template>
  <component
    :is="to ? NuxtLink : 'button'"
    :type="to ? undefined : 'button'"
    :to="to"
    :class="styles.base()"
  >
    <span :class="styles.text()" v-text="text" />

    <Icon v-if="icon" :name="icon" :class="styles.text()" />
  </component>
</template>

<script setup lang="ts">
import { NuxtLink } from '#components'
import type { RouteLocationRaw } from 'vue-router'

interface Props {
  to?: RouteLocationRaw
  text: string
  size?: 'lg'
  icon?: string
  color?: 'white' | 'neutral' | 'brand'
}

const props = withDefaults(defineProps<Props>(), {
  size: 'lg',
  color: 'neutral'
})

const button = tv({
  slots: {
    base: 'flex items-center justify-center gap-4 rounded-md',
    text: 'block font-medium'
  },
  variants: {
    size: {
      lg: {
        base: 'h-12 px-6',
        text: 'text-lg'
      }
    },
    color: {
      white: {
        base: 'bg-white hover:bg-gray-100',
        text: 'text-gray-900'
      },
      neutral: {
        base: 'bg-gray-800 hover:bg-gray-700',
        text: 'text-gray-300'
      },
      brand: {
        base: 'bg-brand hover:bg-brand-dark',
        text: 'text-white'
      }
    }
  }
})

const styles = computed(() =>
  button({
    size: props.size,
    color: props.color
  })
)
</script>
