<template>
  <Container v-if="status === 'pending'" :ui="{ base: 'py-20', inner: 'space-y-16' }">
    <div class="col-span-full space-y-4">
      <Skeleton class="h-10 w-1/2" />
      <Skeleton class="h-40 w-full" />
    </div>

    <div class="col-span-full">
      <Skeleton class="h-120 w-full" />
    </div>
  </Container>

  <div v-else-if="project" class="col-span-full divide-y divide-white/10">
    <ProjectHero
      :name="project.name"
      :url="project.url"
      :description="project.description"
      :technologies="project.technologies"
      :solutions="project.solutions"
    />

    <Blocks :blocks="project?.blocks" />
  </div>
</template>

<script setup lang="ts">
import type { Project } from '~/types/project'

const { slug } = useRoute().params

const { data: project, status } = await useApi<Project>(`/projects/${slug}`)
</script>
