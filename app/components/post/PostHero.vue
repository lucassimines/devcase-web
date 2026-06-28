<template>
  <ContainerGrid :ui="{ inner: 'relative py-section gap-12' }">
    <div class="col-span-full space-y-8 sm:col-span-8">
      <div class="space-y-6">
        <p v-if="post.createdAt" class="text-muted text-sm">
          <NuxtTime :datetime="post.createdAt" year="numeric" month="long" day="numeric" />
        </p>

        <h1 class="text-4xl font-medium tracking-wide sm:text-6xl" v-text="$tr(post.name)" />

        <div v-if="post.categories.length" class="flex flex-wrap gap-2">
          <Pill
            v-for="category in post.categories"
            :key="category.id"
            :label="$tr(category.name)"
          />
        </div>

        <div v-if="$tr(post.excerpt)" class="max-2lg:max-w-2xl">
          <div class="prose-base sm:prose-lg text-elevated">
            <p v-text="$tr(post.excerpt)" />
          </div>
        </div>
      </div>
    </div>

    <figure
      v-if="$tr(post.image)"
      class="col-span-full overflow-hidden rounded-2xl border border-white/10 sm:col-span-4 sm:col-start-9"
    >
      <NuxtImg
        :src="$imageUrl(post.image)"
        :alt="`${$tr(post.name)} cover image`"
        preset="lg"
        class="aspect-4/3 w-full object-cover sm:aspect-square"
      />
    </figure>
  </ContainerGrid>
</template>

<script setup lang="ts">
import type { Post } from '~/types/post'

defineProps<{
  post: Post
}>()
</script>
