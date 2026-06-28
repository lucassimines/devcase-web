<template>
  <Container :ui="{ inner: 'relative space-y-10 py-12 sm:space-y-14 sm:py-20' }">
    <PageTitle :title="$t('projects.featured')" size="sm" />

    <div class="flex flex-col gap-12 sm:gap-20">
      <ProjectCard v-if="featuredProject" :project="featuredProject" />

      <div class="grid gap-12 lg:grid-cols-2">
        <ProjectCard v-if="secondProject" :project="secondProject" />

        <ProjectViewMoreCard />
      </div>
    </div>
  </Container>
</template>

<script setup lang="ts">
import type { Project } from '~/types/project'

const { data: projects } = await useApi<Project[]>('/projects/featured')

const featuredProject = computed(() => projects.value?.[0])
const secondProject = computed(() => projects.value?.[1])
</script>
