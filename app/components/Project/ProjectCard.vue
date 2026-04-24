<template>
  <NuxtLink
    :to="{ name: 'project-slug', params: { slug: project.slug } }"
    class="group @container block space-y-4"
  >
    <div
      class="group relative aspect-square overflow-hidden rounded-2xl border border-white/10 bg-black @2xl:aspect-10/7 @4xl:aspect-video @5xl:aspect-12/6"
    >
      <figure v-if="project.background" class="absolute inset-0">
        <NuxtImg
          :src="$imageUrl(project.background)"
          alt="Background"
          class="size-full object-cover object-top opacity-20"
        />
      </figure>

      <figure class="absolute top-1/6 left-0 z-2 flex size-full justify-center">
        <div class="rounded-4xl border border-white/20 p-6 backdrop-blur-lg">
          <NuxtImg
            class="w-90 overflow-hidden rounded-xl object-contain shadow-lg"
            alt="Image"
            :src="$imageUrl(project.image)"
          />
        </div>
      </figure>
    </div>

    <div
      class="flex items-center justify-between gap-4 transition-opacity duration-300 group-hover:opacity-80"
    >
      <h3 class="text-4xl font-medium" v-text="project.name" />

      <div
        class="relative h-px w-10 bg-gray-600 after:absolute after:-top-0.75 after:right-0 after:size-2 after:rotate-45 after:border-t after:border-r after:border-gray-600 after:content-['']"
      />
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { Project } from '~/types/project'

defineProps<{
  project: Project
}>()
</script>
