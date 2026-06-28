<template>
  <Loader v-if="pageStatus === 'pending' || status === 'pending'" />

  <ProjectList v-else-if="page && projects" :projects="projects" :page="page" />
</template>

<script setup lang="ts">
import type { PaginatedResponse } from '~/types/api'
import type { Project } from '~/types/project'

const { data: page, status: pageStatus, error: pageError } = usePageFetch('projects')

const route = useRoute()

const { profile } = useBootstrap()

const { $tr } = useNuxtApp()

const router = useRouter()

const {
  public: { appUrl }
} = useRuntimeConfig()

const pageNumber = computed(() => route.params.page)

const {
  data: projects,
  status,
  error
} = await useApi<PaginatedResponse<Project>>('/projects', {
  query: {
    page: pageNumber
  }
})

useSiteSeo({
  title: () =>
    page.value?.name ? $tr(page.value.name) : 'Web Development Projects & Case Studies',
  description: () =>
    `Explore web development projects and case studies by ${profile.value.name}, featuring Nuxt, Vue, Laravel, Node.js, and full-stack product work.`,
  path: route.path,
  schema: () => ({
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: page.value?.name ? $tr(page.value.name) : 'Projects',
    description: typeof page.value?.content === 'string' ? page.value.content : undefined,
    itemListElement:
      projects.value?.data.map((project, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        url: `${appUrl}${router.resolve({ name: 'projects-slug', params: { slug: project.slug } }).path}`,
        name: $tr(project.name),
        description: $tr(project.description)
      })) || []
  })
})

if (pageError.value || error.value) {
  throw createError({
    statusCode: pageError.value?.status || error.value?.status
  })
}
</script>
