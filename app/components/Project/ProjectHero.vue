<template>
  <Container :ui="{ inner: 'relative py-section' }">
    <div class="col-span-full space-y-8 lg:col-span-6">
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

    <div
      v-if="solutions.length || technologies.length"
      class="col-span-full space-y-10 lg:col-span-5 lg:col-start-8"
    >
      <ProjectFeatures
        v-if="solutions.length"
        :title="$t('developedSolutions')"
        icon="lucide:puzzle"
        :items="solutions"
      >
        <template #default="{ item }">
          <Pill :label="item.name" />
        </template>
      </ProjectFeatures>

      <ProjectFeatures
        v-if="technologies.length"
        :title="$t('stack')"
        icon="lucide:layers"
        :items="technologies"
      >
        <template #default="{ item }">
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
