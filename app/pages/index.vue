<template>
  <div class="divide-muted divide-y">
    <HomeIntro />

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
    image: '/images/dummy.jpeg',
    slug: 'ppa'
  },
  {
    id: 2,
    name: 'Kaaza',
    description: 'Kaaza is a 3D and architecture studio focused on creating immersive experiences.',
    image: '/images/dummy2.jpg',
    slug: 'kaaza'
  },
  {
    id: 3,
    name: 'Warner Bros Brasil',
    description:
      'Warner Bros Brasil is a subsidiary of Warner Bros. that produces and distributes movies and TV shows in Brazil.',
    image: '/images/dummy.jpeg',
    slug: 'warner-bros-brasil'
  },
  {
    id: 4,
    name: 'Andy’s Bet Club',
    description:
      'Andy’s Bet Club is a sports betting platform that allows users to bet on sports events.',
    image: '/images/dummy.jpeg',
    slug: 'andy-s-bet-club'
  }
]
</script>
