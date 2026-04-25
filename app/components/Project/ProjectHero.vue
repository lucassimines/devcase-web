<template>
  <Container :ui="{ inner: 'relative flex flex-col 2lg:flex-row gap-24 py-section' }">
    <div class="flex flex-col gap-14">
      <div class="space-y-8">
        <h1 class="text-4xl font-medium tracking-wide sm:text-6xl" v-text="name" />

        <div v-if="description" class="max-2lg:max-w-2xl">
          <div class="prose-base sm:prose-lg text-elevated">
            <p v-text="description" />
          </div>
        </div>
      </div>

      <div v-if="url" class="flex justify-start">
        <Button
          :to="url"
          :text="$t('projects.view')"
          icon="lucide:arrow-up-right"
          target="_blank"
          color="white"
          size="sm"
        />
      </div>
    </div>

    <div v-if="solutions.length || technologies.length" class="flex-none space-y-10 sm:w-120">
      <ProjectFeatures
        v-if="solutions.length"
        :title="$t('developedSolutions')"
        icon="lucide:puzzle"
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

defineProps<{
  name: string
  url: string
  description?: string
  technologies: Technology[]
  solutions: Solution[]
}>()
</script>
