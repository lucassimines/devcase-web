<template>
  <Loader v-if="pageStatus === 'pending' || status === 'pending'" />

  <PostList v-else-if="page && posts" :posts="posts" :page="page" />
</template>

<script setup lang="ts">
import type { PaginatedResponse } from '~/types/api'
import type { Post } from '~/types/post'

const { data: page, status: pageStatus, error: pageError } = usePageFetch('articles')

const route = useRoute()

const { profile } = useBootstrap()

const { $tr } = useNuxtApp()

const router = useRouter()

const {
  public: { appUrl }
} = useRuntimeConfig()

const pageNumber = computed(() => route.params.page)

const {
  data: posts,
  status,
  error
} = await useApi<PaginatedResponse<Post>>('/posts', {
  query: {
    page: pageNumber
  }
})

useSiteSeo({
  title: () => {
    const baseTitle = page.value?.name ? $tr(page.value.name) : 'Articles'
    return `${baseTitle} - Page ${pageNumber.value}`
  },
  description: () =>
    page.value?.content && typeof page.value.content === 'string'
      ? page.value.content
      : `Articles on web development, Nuxt, Vue, and full-stack engineering by ${profile.value.name}.`,
  path: route.path,
  schema: () => ({
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: page.value?.name ? $tr(page.value.name) : 'Articles',
    itemListElement:
      posts.value?.data.map((post, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        url: `${appUrl}${router.resolve({ name: 'articles-slug', params: { slug: post.slug } }).path}`,
        name: $tr(post.name),
        description: post.excerpt ? $tr(post.excerpt) : undefined
      })) || []
  })
})

if (pageError.value || error.value) {
  throw createError({
    statusCode: pageError.value?.status || error.value?.status
  })
}
</script>
