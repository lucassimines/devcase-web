<template>
  <h2 :class="pageTitle({ size })">
    <span v-html="title" />
  </h2>
</template>

<script setup lang="ts">
interface Props {
  title: string
  size?: 'md' | 'lg'
}

withDefaults(defineProps<Props>(), {
  size: 'md'
})

const pageTitle = tv({
  variants: {
    size: {
      md: 'text-4xl',
      lg: 'text-5xl'
    }
  }
})
</script>
