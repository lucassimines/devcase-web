<template>
  <ContainerGrid
    :ui="{
      inner: 'py-16 sm:min-h-[50vh] content-center lg:min-h-[70vh] items-center'
    }"
  >
    <div class="sm:col-span-7 md:col-span-6 lg:col-span-7">
      <h1
        v-if="intro.title"
        class="text-4xl leading-tight font-medium text-pretty sm:text-5xl lg:text-6xl xl:text-7xl/21"
        v-text="intro.title"
      />
    </div>

    <div
      v-if="intro.description"
      class="prose-base prose-lg sm:prose-xl sm:col-span-7 md:col-span-6 lg:col-span-5"
    >
      <p v-text="intro.description" />
    </div>
  </ContainerGrid>
</template>

<script setup lang="ts">
import type { ContentHome } from '~/types/page'

defineProps<ContentHome>()
</script>
