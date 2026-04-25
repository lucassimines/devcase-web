<template>
  <div class="pt-26">
    <Container>
      <figure class="size-40 flex-none overflow-hidden rounded-full">
        <NuxtImg src="/images/avatar.jpg" alt="Lucas Simines" class="size-full object-cover" />
      </figure>
    </Container>

    <Blocks :blocks="page?.blocks" />
  </div>
</template>

<script setup lang="ts">
const { data: page } = usePageFetch('about')
</script>
