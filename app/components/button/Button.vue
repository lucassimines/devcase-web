<template>
  <component
    :is="to ? NuxtLink : 'button'"
    :type="to ? undefined : 'button'"
    :to="to"
    :class="cn(styles.base(), ui?.base)"
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
  variant?: 'button' | 'link'
  size?: 'sm' | 'md' | 'lg'
  icon?: string
  color?: 'white' | 'neutral' | 'brand'
  ui?: {
    base?: string
  }
}

const DEFAULT_ICON = 'lucide:arrow-right'

const props = withDefaults(defineProps<Props>(), {
  variant: 'button',
  size: 'lg',
  color: 'neutral',
  icon: DEFAULT_ICON
})

const button = tv({
  slots: {
    base: 'group flex items-center justify-center',
    text: 'block font-medium'
  },
  variants: {
    variant: {
      button: {
        base: 'rounded-md'
      },
      link: {
        base: 'h-auto rounded-none p-0',
        text: 'underline-offset-4 group-hover:underline'
      }
    },
    size: {
      sm: {
        base: 'gap-1.5',
        text: 'text-sm'
      },
      md: {
        base: 'gap-2',
        text: 'text-base'
      },
      lg: {
        base: 'gap-4',
        text: 'text-lg'
      }
    },
    color: {
      white: {
        text: 'text-gray-900'
      },
      neutral: {
        text: 'text-gray-300'
      },
      brand: {
        text: 'text-brand'
      }
    }
  },
  compoundVariants: [
    {
      variant: 'button',
      size: 'sm',
      class: {
        base: 'h-8.5 px-3'
      }
    },
    {
      variant: 'button',
      size: 'md',
      class: {
        base: 'h-10 px-4'
      }
    },
    {
      variant: 'button',
      size: 'lg',
      class: {
        base: 'h-12 px-6'
      }
    },
    {
      variant: 'button',
      color: 'white',
      class: {
        base: 'bg-white hover:bg-white/90',
        text: 'text-gray-900'
      }
    },
    {
      variant: 'button',
      color: 'neutral',
      class: {
        base: 'bg-gray-800 hover:bg-gray-700',
        text: 'text-gray-300'
      }
    },
    {
      variant: 'button',
      color: 'brand',
      class: {
        base: 'bg-brand hover:bg-brand-dark',
        text: 'text-white'
      }
    }
  ]
})

const styles = computed(() =>
  button({
    variant: props.variant,
    size: props.size,
    color: props.color
  })
)
</script>
