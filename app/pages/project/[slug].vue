<template>
  <Container v-if="status === 'pending'" :ui="{ base: 'py-20 flex-1', inner: 'space-y-16' }">
    <div class="space-y-4">
      <Skeleton class="h-10 w-1/2" />
      <Skeleton class="h-40 w-full" />
    </div>

    <Skeleton class="h-120 w-full" />
  </Container>

  <div v-else-if="project" class="flex-1 divide-y divide-white/10">
    <ProjectHero
      :name="project.name"
      :url="project.url"
      :description="project.description"
      :technologies="project.technologies"
      :solutions="project.solutions"
    />

    <section class="pb-20">
      <BlockResolver
        v-for="(block, index) in project.blocks"
        :key="`${block.type}-${index}`"
        :block="block"
      />
    </section>
  </div>
</template>

<script setup lang="ts">
import type { Project } from '~/types/project'

const { slug } = useRoute().params

const { data: project, status } = await useApi<Project>(`/projects/${slug}`)
</script>
