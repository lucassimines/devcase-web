<template>
  <ContainerGrid :ui="{ inner: 'py-section gap-8 sm:gap-10 lg:gap-12' }">
    <figure
      v-if="$tr(post.image)"
      class="col-span-full overflow-hidden rounded-2xl border border-white/10"
    >
      <div class="aspect-4/3 sm:aspect-16/10 lg:aspect-16/7">
        <NuxtImg
          :src="$imageUrl(post.image)"
          :alt="`${$tr(post.name)} cover image`"
          preset="lg"
          class="size-full object-cover"
        />
      </div>
    </figure>

    <div class="article-content space-y-6">
      <p v-if="post.createdAt" class="text-default text-sm">
        <NuxtTime :datetime="post.createdAt" year="numeric" month="long" day="numeric" />
      </p>

      <h1
        class="text-4xl font-medium tracking-wide sm:text-5xl lg:text-6xl"
        v-text="$tr(post.name)"
      />

      <div v-if="post.categories.length" class="flex flex-wrap gap-2">
        <Pill v-for="category in post.categories" :key="category.id" :label="$tr(category.name)" />
      </div>

      <div v-if="$tr(post.excerpt)">
        <div class="prose-base sm:prose-lg text-elevated max-w-none">
          <p v-text="$tr(post.excerpt)" />
        </div>
      </div>
    </div>
  </ContainerGrid>
</template>

<script setup lang="ts">
import type { Post } from '~/types/post'

defineProps<{
  post: Post
}>()
</script>
