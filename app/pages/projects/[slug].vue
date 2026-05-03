<template>
  <Loader v-if="status === 'pending'" />

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

const { data: project, status, error } = await useApi<Project>(`/projects/${slug}`)

if (error.value) {
  throw createError({
    statusCode: error.value.status
  })
}
</script>
