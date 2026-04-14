<template>
  <div v-if="projects?.length" class="divide-muted divide-y">
    <HomeIntro />

    <Container :ui="{ inner: 'space-y-10 py-14' }">
      <PageTitle :title="$t('projects.featured')" />

      <div class="grid grid-cols-3 gap-8">
        <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
      </div>
    </Container>
  </div>
</template>

<script setup lang="ts">
const { data: projects } = await useApi<Project[]>('/projects/featured')
</script>
