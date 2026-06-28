<template>
  <Loader v-if="status === 'pending'" />

  <article v-else-if="post?.data" class="divide-y divide-white/10">
    <PostHero :post="post.data" />

    <Container v-if="$tr(post.data.content)">
      <div class="py-section">
        <div class="prose-base sm:prose-lg max-w-none" v-html="$tr(post.data.content)" />
      </div>
    </Container>

    <PostFooter v-if="post.meta.next" :next-post="post.meta.next" />
  </article>
</template>

<script setup lang="ts">
import type { PostResponse } from '~/types/post'

const { slug } = useRoute().params
const { $imageUrl, $tr } = useNuxtApp()

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

useSiteSeo({
  title: () => (post.value?.data?.name ? $tr(post.value.data.name) : undefined),
  description: () => (post.value?.data?.excerpt ? $tr(post.value.data.excerpt) : undefined),
  path: () =>
    router.resolve({ name: 'articles-slug', params: { slug: post.value?.data?.slug || slug } })
      .path,
  image: () => $imageUrl(post.value?.data?.image),
  type: 'article',
  schema: () =>
    post.value?.data
      ? {
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: $tr(post.value.data.name),
          description: post.value.data.excerpt ? $tr(post.value.data.excerpt) : undefined,
          image: $imageUrl(post.value.data.image),
          url: `${appUrl}${router.resolve({ name: 'articles-slug', params: { slug: post.value.data.slug } }).path}`,
          datePublished: post.value.data.createdAt,
          dateModified: post.value.data.updatedAt,
          author: {
            '@type': 'Person',
            name: profile.value.name,
            url: appUrl
          },
          keywords: post.value.data.categories.map((category) => $tr(category.name)).join(', ')
        }
      : undefined
})
</script>
