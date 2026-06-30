<template>
  <Container
    v-if="posts?.length"
    :ui="{ inner: 'relative space-y-10 py-12 sm:space-y-14 sm:py-20' }"
  >
    <div class="flex flex-wrap items-end justify-between gap-6">
      <PageTitle :title="$t('articles.latest')" size="sm" />

      <Button :to="{ name: 'articles' }" :text="$t('articles.viewAll')" size="md" />
    </div>

    <div class="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
      <PostCard
        v-for="(post, key) in posts"
        :key="post.id"
        :class="{ 'md:col-span-2 lg:col-span-1': key === 0 }"
        :post="post"
      />
    </div>
  </Container>
</template>

<script setup lang="ts">
import type { PaginatedResponse } from '~/types/api'
import type { Post } from '~/types/post'

const { data: response } = await useApi<PaginatedResponse<Post>>('/posts', {
  query: { limit: 3 }
})

const posts = computed(() => response.value?.data ?? [])
</script>
