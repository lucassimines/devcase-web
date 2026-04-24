<template>
  <component
    :is="to ? NuxtLink : 'button'"
    :type="to ? undefined : 'button'"
    :to="to"
    :class="styles.base()"
  >
    <span :class="styles.text()" v-text="text" />

    <Icon
      v-if="icon"
      :name="icon"
      :class="[
        styles.text(),
        {
          'transition-transform group-hover:translate-x-1': icon === DEFAULT_ICON
        }
      ]"
    />
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

const DEFAULT_ICON = 'lucide:arrow-right'

const props = withDefaults(defineProps<Props>(), {
  size: 'lg',
  color: 'neutral',
  icon: DEFAULT_ICON
})

const button = tv({
  slots: {
    base: 'group flex items-center justify-center gap-4 rounded-md',
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
        base: 'bg-white hover:bg-white/90',
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
