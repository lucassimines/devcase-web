<template>
  <component :is="tag" :class="cn(container.base, ui?.base)">
    <div :class="cn(container.slots.inner, ui?.inner)">
      <slot />
    </div>
  </component>
</template>

<script setup lang="ts">
interface Props {
  tag?: keyof HTMLElementTagNameMap
  ui?: {
    base?: string
    inner?: string
  }
}

withDefaults(defineProps<Props>(), {
  tag: 'section'
})

const container = tv({
  base: 'px-main',
  slots: {
    inner: 'main-grid mx-auto w-full max-w-(--main-max-width)'
  }
})
</script>
