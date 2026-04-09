<template>
  <div class="divide-y divide-gray-800">
    <Container :ui="{ inner: 'py-14' }">
      <div class="prose">
        <p class="text-gray-elevated text-lg" v-text="$t('intro')" />
      </div>
    </Container>

    <Container :ui="{ inner: 'space-y-10 py-14' }">
      <PageTitle :title="$t('projects.featured')" />

      <div class="grid grid-cols-3 gap-8">
        <ProjectCard v-for="project in projects" :key="project.id" v-bind="project" />
      </div>
    </Container>
  </div>
</template>

<script setup lang="ts">
import type { Project } from '~/types/project'

const projects: Project[] = [
  {
    id: 1,
    name: 'PPA',
    description: 'Latin America’s most prominent gate, door, and barrier operator industry',
    image: '/images/dummy.jpeg'
  },
  {
    id: 2,
    name: 'Project 2',
    description: 'Description 2',
    image: '/images/dummy.jpeg'
  },
  {
    id: 3,
    name: 'Project 3',
    description: 'Description 3',
    image: '/images/dummy.jpeg'
  }
]
</script>
