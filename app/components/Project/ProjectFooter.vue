<template>
  <Container tag="footer" :ui="{ base: 'relative', inner: 'py-section' }">
    <Pattern />

    <div
      class="relative z-2 flex justify-between gap-8 max-md:flex-col md:items-center md:gap-16 lg:gap-40"
    >
      <div class="flex-none">
        <ButtonLink :to="{ name: 'projects' }" :text="$t('projects.label')" />
      </div>

      <NuxtLink
        class="group grow"
        :to="{ name: 'projects-slug', params: { slug: nextProject.slug } }"
      >
        <span class="text-default block" v-text="$t('next')" />

        <div class="flex items-start gap-2">
          <Icon
            name="lucide:corner-down-right"
            class="text-muted group-hover:text-brand mt-0.5 flex-none text-2xl transition-colors sm:text-3xl lg:text-4xl"
          />

          <h3 class="xs:text-2xl text-xl sm:text-3xl lg:text-4xl" v-text="$tr(nextProject.name)" />
        </div>
      </NuxtLink>
    </div>
  </Container>
</template>

<script setup lang="ts">
import type { AdjacentProject } from '~/types/project'

defineProps<{
  nextProject: AdjacentProject
}>()
</script>
