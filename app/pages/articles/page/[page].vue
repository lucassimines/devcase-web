<template>
  <Loader v-if="pageStatus === 'pending' || status === 'pending'" />

  <PostList v-else-if="page && posts" :posts="posts" :page="page" />
</template>

<script setup lang="ts">
import type { PaginatedResponse } from '~/types/api'
import type { Post } from '~/types/post'

const { data: page, status: pageStatus, error: pageError } = await usePageFetch('articles')

const route = useRoute()

const { profile } = useBootstrap()

const { $tr } = useNuxtApp()
const { t } = useI18n()

const router = useRouter()

const {
  public: { appUrl }
} = useRuntimeConfig()

const pageNumber = computed(() => Number(route.params.page))

const {
  data: posts,
  status,
  error
} = await useApi<PaginatedResponse<Post>>('/posts', {
  query: {
    page: pageNumber
  }
})

const articlesTitle = computed(() =>
  page.value?.name ? $tr(page.value.name) : t('seo.articlesFallbackTitle')
)

const articlesDescription = computed(
  () =>
    (page.value?.content && typeof page.value.content === 'string' ? page.value.content : null) ||
    t('seo.articlesDescription', { name: profile.value.name })
)

const articlesPath = computed(() => router.resolve({ name: 'articles' }).path)

useSiteSeo({
  title: () =>
    t('seo.paginatedTitle', {
      title: articlesTitle.value,
      page: pageNumber.value
    }),
  description: () => articlesDescription.value,
  path: () => articlesPath.value,
  noindex: () => pageNumber.value > 1,
  schema: () => ({
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: articlesTitle.value,
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
