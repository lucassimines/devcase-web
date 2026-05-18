<template>
  <Loader v-if="status === 'pending'" />

  <div v-else-if="project?.data" class="divide-y divide-white/10">
    <ProjectHero
      :name="project.data.name"
      :url="project.data.url || ''"
      :description="project.data.description"
      :technologies="project.data.technologies"
      :solutions="project.data.solutions"
    />

    <Blocks :blocks="project.data.blocks" />

    <ProjectFooter v-if="project.meta.next" :next-project="project.meta.next" />
  </div>
</template>

<script setup lang="ts">
import type { ProjectResponse } from '~/types/project'

const { slug } = useRoute().params

const { data: project, status, error } = await useApi<ProjectResponse>(`/projects/${slug}`)

if (error.value) {
  throw createError({
    statusCode: error.value.status
  })
}

useSeoMeta({
  title: () => project.value?.data?.name || undefined,
  description: () => project.value?.data?.description || undefined,
  ogImage: () => project.value?.data?.image || undefined
})
</script>
