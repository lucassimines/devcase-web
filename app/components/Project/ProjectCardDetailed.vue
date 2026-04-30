<template>
  <div
    class="@container grid min-h-120 grid-cols-2 items-center gap-12 rounded-2xl border border-white/10 bg-white/5"
  >
    <NuxtLink
      :to="{ name: 'projects-slug', params: { slug: project.slug } }"
      :class="cn('group relative block size-full overflow-hidden', ui?.base)"
    >
      <figure class="absolute top-1/6 left-0 z-2 flex size-full justify-center">
        <div class="rounded-3xl border border-white/20 p-4 backdrop-blur-lg">
          <NuxtImg
            class="w-90 overflow-hidden rounded-xl object-contain shadow-lg"
            alt="Image"
            preset="md"
            :src="$imageUrl(project.image)"
          />
        </div>
      </figure>
    </NuxtLink>

    <div class="py-16">
      <h3 class="text-2.5xl font-medium @2xl:text-4xl" v-text="project.name" />

      <div
        v-if="project.solutions.length || project.technologies.length"
        class="col-span-full space-y-10 lg:col-span-5 lg:col-start-8"
      >
        <ProjectFeatures
          v-if="project.solutions.length"
          :title="$t('developedSolutions')"
          icon="lucide:puzzle"
          :items="project.solutions"
        >
          <template #default="{ item }">
            <Pill :label="item.name" />
          </template>
        </ProjectFeatures>

        <ProjectFeatures
          v-if="project.technologies.length"
          :title="$t('stack')"
          icon="lucide:layers"
          :items="project.technologies"
        >
          <template #default="{ item }">
            <Pill :label="item.name" :to="item.url" color="green" />
          </template>
        </ProjectFeatures>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Project } from '~/types/project'

defineProps<{
  project: Project
  ui?: {
    base?: string
  }
}>()
</script>
