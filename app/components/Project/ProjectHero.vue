<template>
  <Container :ui="{ inner: 'relative py-16' }">
    <div class="flex flex-col gap-14">
      <div class="space-y-4">
        <h1 class="text-5xl" v-text="name" />

        <div class="prose">
          <p v-if="description" class="text-xl" v-text="description" />
        </div>
      </div>

      <div class="flex items-center justify-between gap-6">
        <div class="space-y-3">
          <h2 class="text-elevated flex items-center gap-2 text-xl">
            <Icon name="lucide:layers" size="22" />
            <span v-text="$t('stack')" />
          </h2>

          <ul class="flex flex-wrap gap-2">
            <li v-for="technology in technologies" :key="technology.id">
              <Pill :label="technology.name" :to="technology.url ?? undefined" />
            </li>
          </ul>
        </div>

        <NuxtLink
          :to="url"
          target="_blank"
          class="text-elevated flex items-center gap-2 font-mono text-xl hover:text-gray-50"
          ><Icon name="lucide:external-link" size="22" /> {{ prettyUrl }}</NuxtLink
        >
      </div>
    </div>
  </Container>
</template>

<script setup lang="ts">
import type { Technology } from '~/types/technology'

const props = defineProps<{
  name: string
  url: string
  description?: string
  technologies: Technology[]
}>()

const prettyUrl = computed(() => {
  return new URL(props.url).hostname
})
</script>
