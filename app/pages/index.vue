<template>
  <Loader v-if="status === 'pending'" />

  <div v-else-if="page" class="divide-y divide-white/10">
    <HomeIntro :intro="page.content.intro" />

    <HomeProjects />

    <Blocks :blocks="page?.blocks" />
  </div>
</template>

<script setup lang="ts">
import type { ContentHome } from '~/types/page'

const { $imageUrl, $tr } = useNuxtApp()

const { data: page, status, error } = usePageFetch<ContentHome>('home')
const { profile, socialMedias } = useBootstrap()
const siteUrl = useSiteUrl()
const profileImageUrl = $imageUrl(profile.value.image)

if (error.value) {
  throw createError({
    statusCode: error.value.status
  })
}

useSiteSeo({
  title: () =>
    (page.value?.content?.intro?.title ? $tr(page.value.content.intro.title) : undefined) ||
    `${profile.value.name} - ${$tr(profile.value.role)}`,
  description: () =>
    (page.value?.content?.intro?.description
      ? $tr(page.value.content.intro.description)
      : undefined) || profile.value.description,
  path: '/',
  schema: () => [
    {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: profile.value.name,
      jobTitle: $tr(profile.value.role),
      description: profile.value.description,
      url: siteUrl,
      image: profileImageUrl,
      sameAs: socialMedias.map((socialMedia) => socialMedia.url),
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Marília',
        addressRegion: 'São Paulo',
        addressCountry: 'BR'
      }
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: profile.value.name,
      url: siteUrl,
      description:
        (page.value?.content?.intro?.description
          ? $tr(page.value.content.intro.description)
          : undefined) || profile.value.description
    }
  ]
})
</script>
