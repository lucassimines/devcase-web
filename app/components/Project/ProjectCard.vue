<template>
  <NuxtLink
    :to="{ name: 'project-slug', params: { slug: project.slug } }"
    class="group block space-y-4"
  >
    <div class="group relative aspect-12/6 overflow-hidden rounded-2xl bg-black">
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
            class="w-93.75 overflow-hidden rounded-xl object-contain shadow-lg"
            alt="Image"
            :src="$imageUrl(project.image)"
          />
        </div>
      </figure>
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
