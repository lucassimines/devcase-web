<template>
  <div v-if="page" class="divide-y divide-white/10">
    <HomeIntro :intro="page.content.intro" />

    <HomeProjects />

    <Blocks :blocks="page?.blocks" />
  </div>
</template>

<script setup lang="ts">
import type { ContentHome } from '~/types/page'

const { data: page } = usePageFetch<ContentHome>('home')
</script>
