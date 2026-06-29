<template>
  <Loader v-if="status === 'pending'" />

  <article v-else-if="post?.data" class="divide-y divide-white/10">
    <div>
      <PostHero :post="post.data" />

      <ContainerGrid v-if="$tr(post.data.content)" :ui="{ base: 'pt-12 lg:pt-18 pb-section' }">
        <ProseContent
          :content="$tr(post.data.content)"
          :ui="{ base: 'article-content max-w-none' }"
        />
      </ContainerGrid>
    </div>

    <ContentFooter v-if="post.meta.next" section="articles" :next="post.meta.next" />
  </article>
</template>

<script setup lang="ts">
import type { PostResponse } from '~/types/post'

const { slug } = useRoute().params
const { $imageUrl, $tr } = useNuxtApp()
const { t } = useI18n()

const { profile } = useBootstrap()

const router = useRouter()

const {
  public: { appUrl }
} = useRuntimeConfig()

const { data: post, status, error } = await useApi<PostResponse>(`/posts/${slug}`)

if (error.value) {
  throw createError({
    statusCode: error.value.status
  })
}

const articlePath = computed(
  () =>
    router.resolve({
      name: 'articles-slug',
      params: { slug: post.value?.data?.slug || slug }
    }).path
)

const articlesIndexPath = computed(() => router.resolve({ name: 'articles' }).path)

const articleTitle = computed(() => (post.value?.data?.name ? $tr(post.value.data.name) : ''))

useSiteSeo({
  title: () => articleTitle.value,
  description: () => (post.value?.data?.excerpt ? $tr(post.value.data.excerpt) : undefined),
  path: () => articlePath.value,
  image: () => $imageUrl(post.value?.data?.image),
  type: 'article',
  publishedTime: () => post.value?.data?.createdAt,
  modifiedTime: () => post.value?.data?.updatedAt,
  breadcrumbs: () => [
    { name: t('seo.breadcrumbHome'), path: '/' },
    { name: t('articles.label'), path: articlesIndexPath.value },
    { name: articleTitle.value, path: articlePath.value }
  ],
  schema: () =>
    post.value?.data
      ? {
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: $tr(post.value.data.name),
          description: post.value.data.excerpt ? $tr(post.value.data.excerpt) : undefined,
          image: $imageUrl(post.value.data.image),
          url: `${appUrl}${articlePath.value}`,
          mainEntityOfPage: `${appUrl}${articlePath.value}`,
          datePublished: post.value.data.createdAt,
          dateModified: post.value.data.updatedAt,
          inLanguage: ['pt-BR', 'en-US'],
          author: {
            '@type': 'Person',
            name: profile.value.name,
            url: appUrl
          },
          publisher: {
            '@type': 'Person',
            name: profile.value.name,
            url: appUrl
          },
          keywords: post.value.data.categories.map((category) => $tr(category.name)).join(', ')
        }
      : undefined
})
</script>
