<template>
  <Container :ui="{ inner: 'py-14 min-h-[70vh]' }">
    <div class="col-span-8 space-y-12">
      <div class="flex items-center gap-6">
        <div class="flex flex-col gap-6">
          <div v-if="intro.title || intro.subtitle" class="flex flex-col">
            <h1
              v-if="intro.title"
              class="text-default text-xl sm:text-3xl lg:text-4xl xl:text-5xl"
              v-text="intro.title"
            />

            <h2
              v-if="intro.subtitle"
              class="text-3xl leading-tight font-medium sm:text-5xl lg:text-6xl xl:text-7xl"
              v-text="intro.subtitle"
            />
          </div>
        </div>
      </div>

      <div v-if="intro.description" class="space-y-4">
        <div class="prose-base sm:prose-lg xl:prose-xl">
          <p v-text="intro.description" />
        </div>
      </div>
    </div>
  </Container>
</template>

<script setup lang="ts">
import type { ContentHome } from '~/types/page'

defineProps<ContentHome>()
</script>
