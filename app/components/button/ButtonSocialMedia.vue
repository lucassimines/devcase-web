<template>
  <NuxtLink
    :key="socialMedia.name"
    :to="socialMedia.url"
    target="_blank"
    :class="cn(base(), ui?.base)"
    ><Icon :name="socialMedia.icon"
  /></NuxtLink>
</template>

<script setup lang="ts">
import type { SocialMedia } from '~/types/bootstrap'

defineProps<{
  socialMedia: SocialMedia
  ui?: {
    base?: string
  }
}>()

const button = tv({
  slots: {
    base: 'hover:text-brand flex items-center justify-center text-[1.375rem]'
  }
})

const { base } = button()
</script>
