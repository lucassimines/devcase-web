<template>
  <Container :ui="{ inner: 'py-16 lg:min-h-[70vh] items-center' }">
    <div class="col-span-full lg:col-span-7">
      <h1
        v-if="intro.title"
        class="text-default text-xl sm:text-3xl lg:text-4xl xl:text-5xl"
        v-text="intro.title"
      />

      <p
        v-if="intro.subtitle"
        class="text-3xl leading-tight font-medium sm:text-5xl lg:text-6xl xl:text-7xl"
        v-text="intro.subtitle"
      />
    </div>

    <div
      v-if="intro.description"
      class="prose-base sm:prose-lg xl:prose-xl col-span-full lg:col-span-5"
    >
      <p v-text="intro.description" />
    </div>
  </Container>
</template>

<script setup lang="ts">
import type { ContentHome } from '~/types/page'

defineProps<ContentHome>()
</script>
