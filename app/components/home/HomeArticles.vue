<template>
  <Container
    v-if="firstPost && otherPosts?.length"
    :ui="{ inner: 'relative space-y-10 py-12 sm:space-y-14 sm:py-20' }"
  >
    <div class="flex flex-wrap items-end justify-between gap-6">
      <PageTitle :title="$t('articles.latest')" size="sm" />

      <Button
        :to="{ name: 'articles' }"
        :ui="{ base: 'max-md:hidden' }"
        :text="$t('articles.viewAll')"
        size="md"
      />
    </div>

    <div class="grid gap-x-12 gap-y-16 md:grid-cols-2">
      <PostCard :post="firstPost" />

      <div class="flex flex-col gap-y-16">
        <PostCard
          v-for="(post, key) in otherPosts"
          :key="post.id"
          :class="{ 'md:col-span-2 lg:col-span-1': key === 0 }"
          :post="post"
          horizontal
        />
      </div>

      <div class="flex">
        <Button
          :to="{ name: 'articles' }"
          :ui="{ base: 'md:hidden' }"
          :text="$t('articles.viewAll')"
          color="white"
          size="md"
        />
      </div>
    </div>
  </Container>
</template>

<script setup lang="ts">
import type { PaginatedResponse } from '~/types/api'
import type { Post } from '~/types/post'

const { data: response } = await useApi<PaginatedResponse<Post>>('/posts', {
  query: { limit: 3 }
})

const firstPost = computed(() => response.value?.data?.[0])
const otherPosts = computed(() => response.value?.data?.slice(1))
</script>
