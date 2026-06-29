<template>
  <Loader v-if="status === 'pending'" />

  <div v-else-if="page" class="relative z-1 divide-y divide-white/10">
    <div class="relative overflow-hidden">
      <SpaceBackground />

      <HomeIntro :intro="page.content.intro" />
    </div>

    <HomeProjects />

    <Blocks :blocks="page?.blocks" />
  </div>
</template>

<script setup lang="ts">
import type { ContentHome } from '~/types/page'

const { $imageUrl, $tr } = useNuxtApp()
const { t } = useI18n()

const { data: page, status, error } = await usePageFetch<ContentHome>('home')
const { profile, socialMedias } = useBootstrap()
const siteUrl = useSiteUrl()
const profileImageUrl = $imageUrl(profile.value.image)

if (error.value) {
  throw createError({
    statusCode: error.value.status
  })
}

const pageDescription = computed(
  () =>
    (page.value?.content?.intro?.description
      ? $tr(page.value.content.intro.description)
      : undefined) || profile.value.description
)

useSiteSeo({
  title: () =>
    (page.value?.content?.intro?.title ? $tr(page.value.content.intro.title) : undefined) ||
    t('seo.defaultTitle', { name: profile.value.name, role: $tr(profile.value.role) }),
  description: () => pageDescription.value,
  path: '/',
  image: profileImageUrl,
  schema: () => [
    {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: profile.value.name,
      jobTitle: $tr(profile.value.role),
      description: pageDescription.value,
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
      description: pageDescription.value,
      publisher: {
        '@type': 'Person',
        name: profile.value.name,
        url: siteUrl
      },
      inLanguage: ['pt-BR', 'en-US']
    }
  ]
})
</script>
