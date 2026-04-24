<template>
  <div>
    <Blocks :blocks="page?.blocks" />
  </div>
</template>

<script setup lang="ts">
const { data: page } = usePageFetch('about')
</script>
