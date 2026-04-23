<template>
  <NuxtLink
    :to="{ name: 'project-slug', params: { slug: project.slug } }"
    class="group block space-y-4"
  >
    <div class="group bg-muted relative aspect-8/11 overflow-hidden rounded-sm">
      <NuxtImg
        :src="$imageUrl(project.image)"
        alt="Project"
        class="size-full object-cover object-top"
      />

      <div
        class="absolute inset-0 flex size-full items-end bg-transparent transition-[background-color] duration-300 group-hover:bg-black/50"
      >
        <div
          class="flex grow translate-y-full items-center p-4 transition-transform duration-300 group-hover:translate-y-0"
        >
          <span class="font-mono font-semibold uppercase" v-text="$t('view')" />
        </div>

        <div
          class="flex translate-y-full items-center p-4 transition-transform delay-75 duration-300 group-hover:translate-y-0"
        >
          <Icon name="lucide:arrow-right" size="22" />
        </div>
      </div>
    </div>

    <div class="transition-opacity duration-300 group-hover:opacity-80">
      <h3 class="text-xl font-medium" v-text="project.name" />
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { Project } from '~/types/project'

defineProps<{
  project: Project
}>()
</script>
