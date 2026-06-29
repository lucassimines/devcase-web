<template>
  <Loader v-if="status === 'pending'" />

  <div v-else-if="project?.data" class="divide-y divide-white/10">
    <ProjectHero
      :name="project.data.name"
      :url="project.data.url"
      :description="project.data.description"
      :technologies="project.data.technologies"
      :solutions="project.data.solutions"
    />

    <Blocks :blocks="project.data.blocks" />

    <ContentFooter v-if="project.meta.next" section="projects" :next="project.meta.next" />
  </div>
</template>

<script setup lang="ts">
import type { ProjectResponse } from '~/types/project'

const { slug } = useRoute().params
const { $imageUrl, $tr } = useNuxtApp()
const { t } = useI18n()

const { profile } = useBootstrap()

const router = useRouter()

const {
  public: { appUrl }
} = useRuntimeConfig()

const { data: project, status, error } = await useApi<ProjectResponse>(`/projects/${slug}`)

if (error.value) {
  throw createError({
    statusCode: error.value.status
  })
}

const projectPath = computed(
  () =>
    router.resolve({
      name: 'projects-slug',
      params: { slug: project.value?.data?.slug || slug }
    }).path
)

const projectsIndexPath = computed(() => router.resolve({ name: 'projects' }).path)

const projectTitle = computed(() =>
  project.value?.data?.name ? $tr(project.value.data.name) : ''
)

const projectDescription = computed(() =>
  project.value?.data?.description ? $tr(project.value.data.description) : undefined
)

useSiteSeo({
  title: () => projectTitle.value,
  description: () => projectDescription.value,
  path: () => projectPath.value,
  image: () => $imageUrl(project.value?.data?.image),
  breadcrumbs: () => [
    { name: t('seo.breadcrumbHome'), path: '/' },
    { name: t('projects.label'), path: projectsIndexPath.value },
    { name: projectTitle.value, path: projectPath.value }
  ],
  schema: () =>
    project.value?.data
      ? {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: $tr(project.value.data.name),
          description: projectDescription.value,
          image: $imageUrl(project.value.data.image),
          url: `${appUrl}${projectPath.value}`,
          mainEntityOfPage: `${appUrl}${projectPath.value}`,
          author: {
            '@type': 'Person',
            name: profile.value.name,
            url: appUrl
          },
          publisher: {
            '@type': 'Person',
            name: profile.value.name,
            url: appUrl
          },
          keywords: project.value.data.technologies.map((technology) => technology.name).join(', ')
        }
      : undefined
})
</script>
