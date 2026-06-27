<template>
  <Loader v-if="status === 'pending'" />

  <div v-else-if="page" class="py-section">
    <Container :ui="{ inner: 'flex max-xs:flex-col xs:items-center gap-6' }">
      <figure class="size-28 flex-none overflow-hidden rounded-full bg-white/10 sm:size-40">
        <NuxtImg
          :src="$imageUrl(profile.image)"
          :alt="profile.name"
          class="size-full object-cover"
          preset="avatar"
        />
      </figure>

      <div class="space-y-3">
        <div class="space-y-2">
          <div>
            <h1 class="text-3xl" v-text="profile.name" />
            <h2 class="text-elevated text-lg" v-text="$tr(profile.role)" />
          </div>

          <div>
            <p class="text-elevated italic" v-text="$tr(profile.location)" />
          </div>
        </div>

        <div class="flex flex-wrap items-center gap-4">
          <ButtonSocialMedia
            v-for="socialMedia in socialMedias"
            :key="socialMedia.name"
            :ui="{ base: 'text-elevated text-xl' }"
            :social-media="socialMedia"
          />
        </div>
      </div>
    </Container>

    <Blocks :blocks="page?.blocks" />
  </div>
</template>

<script setup lang="ts">
const { data: page, status, error } = usePageFetch('about')

const { $imageUrl, $tr } = useNuxtApp()

const { profile, socialMedias } = useBootstrap()

const aboutDescription = `Learn more about ${profile.value.name}, a ${$tr(profile.value.role).toLowerCase()} based in ${$tr(profile.value.location)}, building modern web applications with Nuxt, Vue, Laravel, and Node.js.`

const route = useRoute()

const siteUrl = useSiteUrl(route.path)

const profileImageUrl = $imageUrl(profile.value.image)

useSiteSeo({
  title: () => `${$t('about')} ${profile.value.name}`,
  description: aboutDescription,
  path: route.path,
  schema: {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: profile.value.name,
    jobTitle: $tr(profile.value.role),
    description: aboutDescription,
    url: siteUrl,
    image: profileImageUrl,
    sameAs: socialMedias.map((socialMedia) => socialMedia.url),
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Marília',
      addressRegion: 'São Paulo',
      addressCountry: 'BR'
    }
  }
})

if (error.value) {
  throw createError({
    statusCode: error.value.status
  })
}
</script>
