<template>
  <component :is="tag" :class="pageTitle({ size })">{{ title }}</component>
</template>

<script setup lang="ts">
interface Props {
  title: string
  size?: 'md' | 'lg'
  tag?: keyof HTMLElementTagNameMap
}

withDefaults(defineProps<Props>(), {
  size: 'md',
  tag: 'h2'
})

const pageTitle = tv({
  variants: {
    size: {
      md: 'text-2xl font-medium sm:text-4xl',
      lg: 'text-4xl font-medium sm:text-5xl lg:text-6xl'
    }
  }
})
</script>
