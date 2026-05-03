<template>
  <Loader v-if="status === 'pending'" />

  <div v-else-if="page" class="divide-y divide-white/10">
    <HomeIntro :intro="page.content.intro" />

    <HomeProjects />

    <Blocks :blocks="page?.blocks" />
  </div>
</template>

<script setup lang="ts">
import type { ContentHome } from '~/types/page'

const { data: page, status, error } = usePageFetch<ContentHome>('home')

if (error.value) {
  throw createError({
    statusCode: error.value.status
  })
}
</script>
