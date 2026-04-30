<template>
  <Container v-if="status === 'pending'" :ui="{ base: 'py-20', inner: 'space-y-16' }">
    <div class="col-span-full space-y-4">
      <Skeleton class="h-10 w-1/2" />
      <Skeleton class="h-180 w-full" />
    </div>
  </Container>

  <div v-else-if="page && projects?.data.length" class="divide-y divide-white/10">
    <Container :ui="{ inner: 'relative' }">
      <div class="col-span-full space-y-14 pt-12 pb-20 sm:pt-20 sm:pb-32">
        <PageTitle :title="page.name" size="lg" />

        <div class="flex flex-col gap-12 sm:gap-20">
          <ProjectCard v-if="featuredProject" :project="featuredProject" />

          <div
            v-if="otherProjects?.length"
            class="grid gap-12 lg:grid-cols-2 xl:gap-x-18 xl:gap-y-26"
          >
            <ProjectCard v-for="project in otherProjects" :key="project.id" :project="project" />
          </div>
        </div>
      </div>
    </Container>

    <Blocks :blocks="page.blocks" />
  </div>
</template>

<script setup lang="ts">
import type { PaginatedResponse } from '~/types/api'
import type { Project } from '~/types/project'

const { data: page } = usePageFetch('projects')

const { data: projects, status } = await useApi<PaginatedResponse<Project>>('/projects/list')

const featuredProject = computed(() => projects.value?.data?.[0])

const otherProjects = computed(() => projects.value?.data?.slice(1))
</script>
