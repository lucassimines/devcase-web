<template>
  <div class="divide-y divide-white/10">
    <Container :ui="{ inner: 'relative' }">
      <div class="space-y-8 pt-12 pb-20 sm:space-y-14 sm:pt-20 sm:pb-32">
        <PageTitle :title="$tr(page.name)" tag="h1" />

        <div
          v-if="posts.data.length"
          class="flex flex-col gap-y-18 md:grid md:grid-cols-2 md:gap-x-12 lg:gap-x-16"
        >
          <div class="contents md:flex md:flex-col md:gap-18 xl:gap-y-26">
            <PostCard
              v-for="{ post, horizontal, index } in masonryColumns.left"
              :key="post.id"
              :post="post"
              :horizontal="horizontal"
              :style="{ order: index }"
            />
          </div>

          <div class="contents md:flex md:flex-col md:gap-18 xl:gap-y-26">
            <PostCard
              v-for="{ post, horizontal, index } in masonryColumns.right"
              :key="post.id"
              :post="post"
              :horizontal="horizontal"
              :style="{ order: index }"
            />
          </div>
        </div>

        <Pagination
          v-if="posts.meta.last_page > 1"
          :page="pageNumber"
          :pages="posts.meta.last_page"
          canonical-route-name="articles"
          paginated-route-name="articles-page-page"
        />
      </div>
    </Container>

    <FeedList v-if="pageNumber === 1" />

    <Blocks :blocks="page.blocks" />
  </div>
</template>

<script setup lang="ts">
import type { PaginatedResponse } from '~/types/api'
import type { Page } from '~/types/page'
import type { Post } from '~/types/post'

const props = defineProps<{
  page: Page
  posts: PaginatedResponse<Post>
}>()

interface MasonryColumn {
  post: Post
  horizontal: boolean
  index: number
}

const masonryColumns = computed(() => {
  const left: MasonryColumn[] = []
  const right: MasonryColumn[] = []

  props.posts.data.forEach((post, i) => {
    const item = { post, horizontal: i > 0, index: i }
    ;(i % 2 === 0 ? left : right).push(item)
  })

  return { left, right }
})

const route = useRoute()

const pageNumber = computed(() => {
  const pageParam = Number(route.params.page || 1)
  return Number.isNaN(pageParam) || pageParam < 1 ? 1 : pageParam
})
</script>
