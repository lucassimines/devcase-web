<template>
  <div class="divide-y divide-white/10">
    <ContainerGrid :ui="{ inner: 'relative' }">
      <div class="col-span-full space-y-8 pt-12 pb-20 sm:space-y-14 sm:pt-20 sm:pb-32">
        <PageTitle :title="$tr(page.name)" tag="h1" />

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

      <Pagination
        v-if="projects.meta.last_page > 1"
        :page="pageNumber"
        :pages="projects.meta.last_page"
        canonical-route-name="projects"
        paginated-route-name="projects-page-page"
      />
    </ContainerGrid>

    <Blocks :blocks="page.blocks" />
  </div>
</template>

<script setup lang="ts">
import type { PaginatedResponse } from '~/types/api'
import type { Page } from '~/types/page'
import type { Project } from '~/types/project'

const props = defineProps<{
  page: Page
  projects: PaginatedResponse<Project>
}>()

const route = useRoute()

const { $tr } = useNuxtApp()

const pageNumber = computed(() => {
  const pageParam = Number(route.params.page || 1)
  return Number.isNaN(pageParam) || pageParam < 1 ? 1 : pageParam
})

const featuredProject = computed(() => props.projects.data[0])

const otherProjects = computed(() => props.projects.data.slice(1))
</script>
