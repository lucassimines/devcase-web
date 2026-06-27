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

const { data: page, status, error } = usePageFetch<ContentHome>('home')
const { profile, socialMedias } = useBootstrap()
const siteUrl = useSiteUrl()
const profileImageUrl = useSiteUrl(profile.image)
const { $tr } = useNuxtApp()

if (error.value) {
  throw createError({
    statusCode: error.value.status
  })
}

useSiteSeo({
  title: () =>
    (page.value?.content?.intro?.title ? $tr(page.value.content.intro.title) : undefined) ||
    `${profile.name} - ${profile.title}`,
  description: () =>
    (page.value?.content?.intro?.description
      ? $tr(page.value.content.intro.description)
      : undefined) || profile.description,
  path: '/',
  schema: () => [
    {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: profile.name,
      jobTitle: profile.title,
      description: profile.description,
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
      name: profile.name,
      url: siteUrl,
      description:
        (page.value?.content?.intro?.description
          ? $tr(page.value.content.intro.description)
          : undefined) || profile.description
    }
  ]
})
</script>
