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

    <ProjectFooter v-if="project.meta.next" :next-project="project.meta.next" />
  </div>
</template>

<script setup lang="ts">
import type { ProjectResponse } from '~/types/project'

const { slug } = useRoute().params
const { $imageUrl, $tr } = useNuxtApp()

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

useSiteSeo({
  title: () => (project.value?.data?.name ? $tr(project.value.data.name) : undefined),
  description: () =>
    project.value?.data?.description ? $tr(project.value.data.description) : undefined,
  path: () =>
    router.resolve({ name: 'projects-slug', params: { slug: project.value?.data?.slug || slug } })
      .path,
  image: () => $imageUrl(project.value?.data?.image),
  schema: () =>
    project.value?.data
      ? {
          '@context': 'https://schema.org',
          '@type': 'CreativeWork',
          name: $tr(project.value.data.name),
          description: $tr(project.value.data.description),
          image: $imageUrl(project.value.data.image),
          url: `${appUrl}${router.resolve({ name: 'projects-slug', params: { slug: project.value.data.slug } }).path}`,
          sameAs: project.value.data.url ? $tr(project.value.data.url) : undefined,
          creator: {
            '@type': 'Person',
            name: profile.name,
            url: appUrl
          },
          keywords: project.value.data.technologies.map((technology) => technology.name).join(', ')
        }
      : undefined
})
</script>
