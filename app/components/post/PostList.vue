<template>
  <div class="divide-y divide-white/10">
    <ContainerGrid :ui="{ inner: 'relative' }">
      <div class="col-span-full space-y-8 pt-12 pb-20 sm:space-y-14 sm:pt-20 sm:pb-32">
        <PageTitle :title="$tr(page.name)" tag="h1" />

        <div v-if="posts.data.length" class="grid gap-12 lg:grid-cols-2 xl:gap-x-18 xl:gap-y-26">
          <PostCard v-for="post in posts.data" :key="post.id" :post="post" />
        </div>

        <Pagination
          v-if="posts.meta.last_page > 1"
          :page="pageNumber"
          :pages="posts.meta.last_page"
          canonical-route-name="articles"
          paginated-route-name="articles-page-page"
        />
      </div>
    </ContainerGrid>

    <FeedList v-if="pageNumber === 1" />

    <Blocks :blocks="page.blocks" />
  </div>
</template>

<script setup lang="ts">
import type { PaginatedResponse } from '~/types/api'
import type { Page } from '~/types/page'
import type { Post } from '~/types/post'

defineProps<{
  page: Page
  posts: PaginatedResponse<Post>
}>()

const route = useRoute()

const pageNumber = computed(() => {
  const pageParam = Number(route.params.page || 1)
  return Number.isNaN(pageParam) || pageParam < 1 ? 1 : pageParam
})
</script>
