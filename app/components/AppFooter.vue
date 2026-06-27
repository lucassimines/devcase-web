<template>
  <footer class="divide-y divide-white/10 border-t border-white/10">
    <Container :ui="{ inner: 'py-12 flex flex-wrap gap-y-8 gap-x-20 md:gap-x-28' }">
      <AppFooterLinkColumn :title="$t('usefulLinks')" :links="usefulLinks" />

      <AppFooterLinkColumn :title="$t('contact')" :links="[contactLink]" />
    </Container>

    <Container
      :ui="{
        inner: 'py-6 sm:py-10 max-sm:flex-col max-sm:items-center flex gap-6 sm:justify-between'
      }"
    >
      <div v-if="socialMedias.length" class="flex flex-wrap gap-4">
        <ButtonSocialMedia
          v-for="socialMedia in socialMedias"
          :key="socialMedia.name"
          :ui="{ base: 'text-[1.375rem] text-elevated' }"
          :social-media="socialMedia"
        />
      </div>

      <div>
        <span
          class="block text-center font-mono text-sm sm:text-right"
          v-text="$t('app.builtWith')"
        />
      </div>
    </Container>

    <Container :ui="{ inner: 'py-4 flex justify-between items-center gap-6' }">
      <span
        class="text-xs text-gray-500"
        v-text="$t('app.copyright', { year: new Date().getFullYear() })"
      />

      <NuxtLink to="/">
        <Logo size="xs" mono />
      </NuxtLink>
    </Container>
  </footer>
</template>

<script setup lang="ts">
import type { FooterLink } from '~/types/bootstrap'

const { socialMedias, profile, bootstrap } = useBootstrap()
const { $tr } = useNuxtApp()

const usefulLinks = computed<FooterLink[]>(() => {
  return [
    ...(bootstrap.value?.menu.links ?? []).map((link) => ({
      name: $tr(link.name),
      slug: link.slug
    })),
    {
      name: $t('resume'),
      url: $tr(profile.value.resumeUrl),
      newTab: true
    }
  ]
})

const contactLink = computed<FooterLink>(() => {
  return {
    name: profile.value.email || '',
    url: `mailto:${profile.value.email}`
  }
})
</script>
