<template>
  <NuxtLink :to="{ name: 'project-slug', params: { slug } }" class="group block space-y-4">
    <figure
      class="aspect-8/11 overflow-hidden rounded-sm bg-gray-800 transition-all group-hover:skew-1"
    >
      <NuxtImg :src="image" alt="Project" class="size-full object-cover" />
    </figure>

    <div class="space-y-2">
      <div class="flex items-center justify-between gap-2">
        <h3 class="text-xl uppercase" v-text="name" />
        <Icon
          class="group-hover:text-brand-alt transition-colors"
          name="lucide:arrow-right"
          size="22"
        />
      </div>

      <h4 class="text-gray-elevated font-sans" v-text="description" />
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { Project } from '~/types/project'

defineProps<Project>()
</script>
