<template>
  <Container :ui="{ inner: 'relative' }">
    <div class="col-span-full space-y-10 py-12 sm:space-y-14 sm:py-20">
      <PageTitle :title="$t('projects.featured')" />

      <div class="gap-main grid grid-cols-2 sm:gap-20">
        <ProjectCard v-if="firstProject" :project="firstProject" :ui="{ base: 'col-span-full' }" />

        <ProjectCard v-if="secondProject" :project="secondProject" />

        <ProjectViewMoreCard />
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
