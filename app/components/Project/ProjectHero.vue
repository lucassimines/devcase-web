<template>
  <Container :ui="{ inner: 'relative py-28 flex gap-24' }">
    <div class="flex flex-col gap-14">
      <div class="space-y-8">
        <h1 class="text-6xl font-medium tracking-wide" v-text="name" />

        <div class="prose">
          <p v-if="description" class="text-lg text-pretty" v-text="description" />
        </div>
      </div>

      <div v-if="url" class="flex justify-start">
        <NuxtLink
          :to="url"
          target="_blank"
          class="text-elevated flex items-center gap-2 font-mono text-lg hover:text-gray-50"
          ><Icon class="text-brand-alt" name="lucide:external-link" /> {{ prettyUrl }}</NuxtLink
        >
      </div>
    </div>

    <div v-if="solutions.length || technologies.length" class="space-y-10">
      <ProjectFeatures
        v-if="solutions.length"
        :title="$t('developedSolutions')"
        icon="lucide:layers"
        :items="solutions"
      >
        <template #default="{ item }: { item: Solution }">
          <Pill :label="item.name" />
        </template>
      </ProjectFeatures>

      <ProjectFeatures
        v-if="technologies.length"
        :title="$t('stack')"
        icon="lucide:layers"
        :items="technologies"
      >
        <template #default="{ item }: { item: Technology }">
          <Pill :label="item.name" :to="item.url" color="green" />
        </template>
      </ProjectFeatures>
    </div>
  </Container>
</template>

<script setup lang="ts">
import type { Solution } from '~/types/solution'
import type { Technology } from '~/types/technology'

const props = defineProps<{
  name: string
  url: string
  description?: string
  technologies: Technology[]
  solutions: Solution[]
}>()

const prettyUrl = computed(() => {
  return new URL(props.url).hostname
})
</script>
