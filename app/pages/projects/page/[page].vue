<template>
  <Loader v-if="pageStatus === 'pending' || status === 'pending'" />

  <ProjectList v-else-if="page && projects" :projects="projects" :page="page" />
</template>

<script setup lang="ts">
import type { PaginatedResponse } from '~/types/api'
import type { Project } from '~/types/project'

const { data: page, status: pageStatus, error: pageError } = await usePageFetch('projects')

const route = useRoute()

const { profile } = useBootstrap()

const { $tr } = useNuxtApp()
const { t } = useI18n()

const router = useRouter()

const {
  public: { appUrl }
} = useRuntimeConfig()

const pageNumber = computed(() => Number(route.params.page))

const {
  data: projects,
  status,
  error
} = await useApi<PaginatedResponse<Project>>('/projects', {
  query: {
    page: pageNumber
  }
})

const projectsTitle = computed(() =>
  page.value?.name ? $tr(page.value.name) : t('seo.projectsFallbackTitle')
)

const projectsDescription = computed(
  () =>
    (typeof page.value?.content === 'string' ? page.value.content : null) ||
    t('seo.projectsDescription', { name: profile.value.name })
)

const projectsPath = computed(() => router.resolve({ name: 'projects' }).path)

useSiteSeo({
  title: () =>
    t('seo.paginatedTitle', {
      title: projectsTitle.value,
      page: pageNumber.value
    }),
  description: () => projectsDescription.value,
  path: () => projectsPath.value,
  noindex: () => pageNumber.value > 1,
  schema: () => ({
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: projectsTitle.value,
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
