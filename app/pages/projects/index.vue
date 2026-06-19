<template>
  <Loader v-if="pageStatus === 'pending' || status === 'pending'" />

  <div v-else-if="page && projects?.data.length" class="divide-y divide-white/10">
    <ContainerGrid :ui="{ inner: 'relative' }">
      <div class="col-span-full space-y-8 pt-12 pb-20 sm:space-y-14 sm:pt-20 sm:pb-32">
        <PageTitle :title="page.name" tag="h1" />

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
    </ContainerGrid>

    <Blocks :blocks="page.blocks" />
  </div>
</template>

<script setup lang="ts">
import type { PaginatedResponse } from '~/types/api'
import type { Project } from '~/types/project'

const { data: page, status: pageStatus, error: pageError } = usePageFetch('projects')

const { data: projects, status, error } = await useApi<PaginatedResponse<Project>>('/projects')

const featuredProject = computed(() => projects.value?.data?.[0])

const otherProjects = computed(() => projects.value?.data?.slice(1))
const siteUrl = useSiteUrl('/').replace(/\/$/, '')

useSiteSeo({
  title: () => page.value?.name || 'Web Development Projects & Case Studies',
  description: () =>
    page.value?.content ||
    'Explore web development projects and case studies by Lucas Simines, featuring Nuxt, Vue, Laravel, Node.js, and full-stack product work.',
  path: '/projects',
  schema: () => ({
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: page.value?.name || 'Projects',
    description: page.value?.content,
    itemListElement:
      projects.value?.data.map((project, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        url: `${siteUrl}/projects/${project.slug}`,
        name: project.name,
        description: project.description
      })) || []
  })
})

if (pageError.value || error.value) {
  throw createError({
    statusCode: pageError.value?.status || error.value?.status
  })
}
</script>
