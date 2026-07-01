<template>
  <Loader v-if="pageStatus === 'pending' || status === 'pending'" />

  <PostList v-else-if="page && posts" :posts="posts" :page="page" />
</template>

<script setup lang="ts">
import type { PaginatedResponse } from '~/types/api'
import type { Post } from '~/types/post'

const { data: page, status: pageStatus, error: pageError } = await usePageFetch('articles')

const { profile } = useBootstrap()

const { $tr } = useNuxtApp()
const { t } = useI18n()

const router = useRouter()

const {
  public: { appUrl }
} = useRuntimeConfig()

const { data: posts, status, error } = await useApi<PaginatedResponse<Post>>('/posts')

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
  title: () => articlesTitle.value,
  description: () => articlesDescription.value,
  path: () => articlesPath.value,
  breadcrumbs: () => [
    { name: t('seo.breadcrumbHome'), path: '/' },
    { name: articlesTitle.value, path: articlesPath.value }
  ],
  schema: () => ({
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: articlesTitle.value,
    description: articlesDescription.value,
    url: `${appUrl}${articlesPath.value}`,
    blogPost:
      posts.value?.data.map((post) => ({
        '@type': 'BlogPosting',
        headline: $tr(post.name),
        description: post.excerpt ? $tr(post.excerpt) : undefined,
        url: `${appUrl}${router.resolve({ name: 'articles-slug', params: { slug: post.slug } }).path}`,
        datePublished: post.createdAt,
        dateModified: post.updatedAt
      })) || []
  })
})

if (pageError.value || error.value) {
  throw createError({
    statusCode: pageError.value?.status || error.value?.status
  })
}
</script>
