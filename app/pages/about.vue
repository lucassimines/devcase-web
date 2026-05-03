<template>
  <Loader v-if="status === 'pending'" />

  <div v-else-if="page" class="py-section">
    <ContainerGrid>
      <figure class="size-28 flex-none overflow-hidden rounded-full sm:size-40">
        <NuxtImg
          src="/images/avatar.jpg"
          alt="Lucas Simines"
          class="size-full object-cover"
          preset="avatar"
        />
      </figure>
    </ContainerGrid>

    <Blocks :blocks="page?.blocks" />
  </div>
</template>

<script setup lang="ts">
const { data: page, status, error } = usePageFetch('about')

if (error.value) {
  throw createError({
    statusCode: error.value.status
  })
}
</script>
