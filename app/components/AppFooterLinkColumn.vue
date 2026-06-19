<template>
  <div class="flex flex-col gap-4">
    <div class="flex items-center gap-2">
      <Icon class="text-elevated" name="uil:corner-down-right-alt" />
      <span class="text-elevated text-sm font-medium" v-text="title" />
    </div>

    <ul class="flex h-full flex-wrap items-center gap-x-8 gap-y-2">
      <li v-for="link in links">
        <NuxtLink
          :to="link.url || `/${link.slug}`"
          :target="link.url && !link.url.startsWith('mailto:') ? '_blank' : undefined"
          :rel="link.url && !link.url.startsWith('mailto:') ? 'noopener noreferrer' : undefined"
          class="underline-offset-6 hover:underline"
        >
          {{ link.name }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import type { FooterLink } from '~/types/bootstrap'

defineProps<{
  title: string
  links: FooterLink[]
}>()
</script>
