<template>
  <NuxtLink
    :to="{ name: 'articles-slug', params: { slug: post.slug } }"
    :class="cn('group @container', { 'block space-y-4': !horizontal })"
  >
    <div
      v-if="!horizontal"
      :class="
        cn(
          'relative aspect-5/3 overflow-hidden rounded-2xl border border-white/10 bg-black transition-colors group-hover:border-white/20'
        )
      "
    >
      <NuxtImg
        v-if="$tr(post.image)"
        :src="$imageUrl(post.image)"
        :alt="`${$tr(post.name)} cover image`"
        preset="lg"
        class="size-full object-cover transition-transform duration-300"
      />
    </div>

    <div class="space-y-6">
      <div class="space-y-4">
        <div class="flex flex-wrap items-center justify-between gap-4">
          <p v-if="post.createdAt" class="text-default text-sm">
            <NuxtTime :datetime="post.createdAt" year="numeric" month="long" day="numeric" />
          </p>

          <div v-if="post.categories.length" class="flex flex-wrap gap-2">
            <Pill
              v-for="category in post.categories"
              :key="category.id"
              :label="$tr(category.name)"
            />
          </div>
        </div>

        <h3 class="text-2xl font-medium @md:text-3xl @2xl:text-4xl" v-text="$tr(post.name)" />
      </div>

      <p v-if="$tr(post.excerpt)" class="text-elevated @md:text-lg" v-text="$tr(post.excerpt)" />
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { Post } from '~/types/post'

defineProps<{
  post: Post
  horizontal?: boolean
}>()
</script>
