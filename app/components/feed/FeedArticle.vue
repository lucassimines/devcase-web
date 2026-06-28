<template>
  <article class="group flex flex-col gap-4 px-5 py-5 sm:px-6 sm:py-6">
    <div class="flex items-start gap-2">
      <span
        class="text-default mt-1 w-[2ch] shrink-0 text-sm font-medium tabular-nums"
        v-text="index + 1"
      />

      <div class="min-w-0 flex-1 space-y-3">
        <h3 class="text-lg font-medium sm:text-xl">
          <a
            :href="story.url"
            target="_blank"
            rel="noopener noreferrer"
            class="group-hover:text-brand transition-colors"
            v-text="story.title"
          />
        </h3>

        <div class="text-default flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
          <span v-if="story.domain" v-text="story.domain" />

          <a
            :href="story.discussionUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="hover:text-brand transition-colors"
          >
            {{ $t('articles.hackerNews.comments', { count: story.commentCount }) }}
          </a>

          <NuxtTime :datetime="story.publishedAt" year="numeric" month="short" day="numeric" />
        </div>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import type { HackerNewsStory } from '~/types/hackerNews'

defineProps<{
  index: number
  story: HackerNewsStory
}>()
</script>
