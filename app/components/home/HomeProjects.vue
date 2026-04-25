<template>
  <Container :ui="{ inner: 'relative' }">
    <div class="space-y-14 py-20">
      <PageTitle :title="$t('projects.featured')" />

      <div class="flex flex-col gap-20">
        <ProjectCard v-if="firstProject" :project="firstProject" />

        <div class="grid gap-8 lg:grid-cols-2">
          <ProjectCard v-if="secondProject" :project="secondProject" />

          <ProjectViewMoreCard />
        </div>
      </div>
    </div>
  </Container>
</template>

<script setup lang="ts">
import type { Project } from '~/types/project'

const { data: projects } = await useApi<Project[]>('/projects/featured')

const firstProject = computed(() => projects.value?.[0])
const secondProject = computed(() => projects.value?.[1])
</script>
