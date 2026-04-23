<template>
  <div class="divide-y divide-white/10">
    <HomeIntro />

    <HomeProjects />

    <Blocks :blocks="page?.blocks" />
  </div>
</template>

<script setup lang="ts">
import type { Page } from '~/types/page'

const { data: page } = await useApi<Page>('/pages/home')
</script>
