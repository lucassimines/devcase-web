<template>
  <section v-if="stories?.length" class="border-t border-white/10">
    <ContainerGrid :ui="{ inner: 'relative' }">
      <div class="py-section col-span-full space-y-8 sm:space-y-10">
        <div class="space-y-3">
          <div class="flex flex-wrap items-center gap-3">
            <h2
              class="text-2.5xl sm:text-3.5xl font-medium"
              v-text="$t('articles.hackerNews.title')"
            />

            <Pill :label="$t('articles.hackerNews.badge')" color="green" />
          </div>

          <p
            class="text-elevated max-w-3xl text-base sm:text-lg"
            v-text="$t('articles.hackerNews.description')"
          />
        </div>

        <ol class="divide-y divide-white/10 rounded-2xl border border-white/10">
          <li v-for="(story, index) in stories" :key="story.id">
            <FeedArticle :index="index" :story="story" />
          </li>
        </ol>

        <p class="text-default text-sm">
          {{ $t('articles.hackerNews.attribution') }}
          <a
            href="https://news.ycombinator.com"
            target="_blank"
            rel="noopener noreferrer"
            class="text-brand hover:underline"
            v-text="'news.ycombinator.com'"
          />
        </p>
      </div>
    </ContainerGrid>
  </section>
</template>

<script setup lang="ts">
const { data: stories } = await useHackerNews()
</script>
