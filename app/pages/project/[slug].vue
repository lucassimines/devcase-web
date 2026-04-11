<template>
  <div v-if="project">
    <ProjectHero :image="project.image" :name="project.name" />
  </div>
</template>

<script setup lang="ts">
const { slug } = useRoute().params

const { data: project } = await useApi<Project>(`/api/project/${slug}`)
</script>
