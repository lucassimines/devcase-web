<template>
  <NuxtLink
    :to="{ name: 'articles-slug', params: { slug: post.slug } }"
    :class="cn('group @container block', featured ? 'space-y-6 sm:space-y-8' : 'space-y-4')"
  >
    <div
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

        <h3
          :class="
            cn('font-medium', featured ? 'text-3xl @2xl:text-5xl' : 'text-2.5xl @2xl:text-4xl')
          "
          v-text="$tr(post.name)"
        />
      </div>

      <p
        v-if="$tr(post.excerpt)"
        :class="cn('text-elevated', featured ? 'text-lg sm:text-xl' : 'text-base')"
        v-text="$tr(post.excerpt)"
      />
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { Post } from '~/types/post'

defineProps<{
  post: Post
  featured?: boolean
}>()
</script>
