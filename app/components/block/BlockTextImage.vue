<template>
  <ContainerGrid :ui="{ inner: 'items-center' }">
    <div
      class="col-span-full space-y-6"
      :class="{ 'lg:order-2': block.textPosition === 'right', 'lg:col-span-5': !!block.image }"
    >
      <PageTitle :title="block.title" />

      <div class="prose-base sm:prose-lg" v-html="block.text" />
    </div>

    <figure
      v-if="block.image"
      class="col-span-full overflow-hidden rounded-xl border border-white/10 lg:col-span-7"
      :class="{ 'lg:order-1': block.textPosition === 'right' }"
    >
      <NuxtImg :src="$imageUrl(block.image)" alt="Image" sizes="100vw md:100vw" class="block" />
    </figure>
  </ContainerGrid>
</template>

<script setup lang="ts">
import type { TextImageBlock } from '~/types/block'

defineProps<{
  block: TextImageBlock
}>()
</script>
