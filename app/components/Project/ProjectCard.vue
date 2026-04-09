<template>
  <div class="space-y-4">
    <figure class="aspect-8/12 overflow-hidden rounded-md bg-gray-800">
      <NuxtImg :src="image" alt="Project" class="size-full object-cover" />
    </figure>

    <div class="space-y-2">
      <h3 class="text-xl uppercase" v-text="name" />

      <h4 class="text-gray-elevated font-sans" v-text="description" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Project } from '~/types/project'

defineProps<Project>()
</script>
