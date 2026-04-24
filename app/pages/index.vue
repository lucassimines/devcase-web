<template>
  <div class="divide-y divide-white/10">
    <HomeIntro />

    <HomeProjects />

    <Blocks :blocks="page?.blocks" />
  </div>
</template>

<script setup lang="ts">
const { data: page } = usePageFetch('home')
</script>
