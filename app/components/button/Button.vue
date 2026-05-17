<template>
  <component
    :is="to ? NuxtLink : 'button'"
    :type="to ? undefined : 'button'"
    :to="to"
    :class="cn(styles.base(), ui?.base)"
  >
    <Icon v-if="iconLeft" :name="iconLeft" :class="styles.text()" />

    <span :class="styles.text()" v-text="text" />

    <Icon
      v-if="defaultIconRight"
      :name="defaultIconRight"
      :class="[
        styles.text(),
        {
          'transition-transform group-hover:translate-x-1': defaultIconRight === DEFAULT_ICON
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
  iconLeft?: string
  iconRight?: string
  color?: 'white' | 'neutral' | 'brand'
  ui?: {
    base?: string
  }
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'button',
  size: 'lg',
  color: 'neutral'
})

const DEFAULT_ICON = 'lucide:arrow-right'

const defaultIconRight = computed(() => {
  if (props.variant === 'link') return props.iconRight
  if (!props.iconRight && !props.iconLeft) return DEFAULT_ICON
  return props.iconRight || DEFAULT_ICON
})

const button = tv({
  slots: {
    base: 'group inline-flex items-center justify-center',
    text: 'block font-medium'
  },
  variants: {
    variant: {
      button: {
        base: 'rounded-md'
      },
      link: {
        base: '',
        text: 'underline-offset-4 group-hover:underline'
      }
    },
    size: {
      sm: {
        text: 'text-sm'
      },
      md: {
        text: 'text-base'
      },
      lg: {
        text: 'text-lg'
      }
    },
    color: {
      white: {
        text: ''
      },
      neutral: {
        text: ''
      },
      brand: {
        text: ''
      }
    }
  },
  compoundVariants: [
    {
      variant: 'button',
      size: 'sm',
      class: {
        base: 'h-8.5 gap-1.5 px-3'
      }
    },
    {
      variant: 'button',
      size: 'md',
      class: {
        base: 'h-10 gap-2 px-4'
      }
    },
    {
      variant: 'button',
      size: 'lg',
      class: {
        base: 'h-12 gap-4 px-6'
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
    },
    {
      variant: 'link',
      size: ['sm', 'md', 'lg'],
      class: {
        base: 'gap-1'
      }
    },
    {
      variant: 'link',
      color: 'white',
      class: {
        text: 'text-gray-50'
      }
    },
    {
      variant: 'link',
      color: 'neutral',
      class: {
        text: 'text-gray-500'
      }
    },
    {
      variant: 'link',
      color: 'brand',
      class: {
        text: 'text-brand'
      }
    }
  ]
})

const styles = button({
  variant: props.variant,
  size: props.size,
  color: props.color
})
</script>
