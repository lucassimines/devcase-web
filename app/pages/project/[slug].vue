<template>
  <div v-if="project">
    <ProjectHero :name="project.name" :url="project.url" />
  </div>
</template>

<script setup lang="ts">
const { slug } = useRoute().params

const { data: project } = await useApi<Project>(`/api/project/${slug}`)
</script>
