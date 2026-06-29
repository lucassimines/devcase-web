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

const { data: projects, status, error } = await useApi<PaginatedResponse<Project>>('/projects')

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
  title: () => projectsTitle.value,
  description: () => projectsDescription.value,
  path: () => projectsPath.value,
  breadcrumbs: () => [
    { name: t('seo.breadcrumbHome'), path: '/' },
    { name: projectsTitle.value, path: projectsPath.value }
  ],
  schema: () => ({
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: projectsTitle.value,
    description: projectsDescription.value,
    url: `${appUrl}${projectsPath.value}`,
    mainEntity: {
      '@type': 'ItemList',
      itemListElement:
        projects.value?.data.map((project, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          url: `${appUrl}${router.resolve({ name: 'projects-slug', params: { slug: project.slug } }).path}`,
          name: $tr(project.name),
          description: $tr(project.description)
        })) || []
    }
  })
})

if (pageError.value || error.value) {
  throw createError({
    statusCode: pageError.value?.status || error.value?.status
  })
}
</script>
