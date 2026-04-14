<template>
  <div v-if="project">
    <ProjectHero :name="project.name" :url="project.url" :description="project.description" />

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

const { data: project } = await useApi<Project>(`/projects/${slug}`)
</script>
