<template>
  <div v-if="page" class="divide-y divide-white/10">
    <Container v-if="projects?.data?.length" :ui="{ inner: 'relative' }">
      <div class="space-y-14 py-20">
        <PageTitle :title="page.name" />

        <div class="grid grid-cols-4 gap-8">
          <ProjectCard v-for="project in projects.data" :key="project.id" :project="project" />
        </div>
      </div>
    </Container>

    <Blocks :blocks="page.blocks" />
  </div>
</template>

<script setup lang="ts">
import type { PaginatedResponse } from '~/types/api'
import type { Page } from '~/types/page'
import type { Project } from '~/types/project'

const { data: page } = await useApi<Page>('/pages/projects')

const { data: projects } = await useApi<PaginatedResponse<Project>>('/projects/list')
</script>
