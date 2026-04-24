<template>
  <Container :ui="{ inner: 'relative' }">
    <div class="space-y-14 py-20">
      <PageTitle :title="$t('projects.featured')" />

      <div class="flex flex-col gap-20">
        <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
      </div>
    </div>
  </Container>
</template>

<script setup lang="ts">
import type { Project } from '~/types/project'

const { data: projects } = await useApi<Project[]>('/projects/featured')
</script>
