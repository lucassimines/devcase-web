<template>
  <Container :ui="{ inner: 'py-12 flex flex-wrap gap-y-10 gap-x-20 md:gap-x-28' }">
    <AppFooterLinkColumn :title="$t('usefulLinks')" :links="usefulLinks" />

    <AppFooterLinkColumn :title="$t('contact')" :links="[contactLink]" />
  </Container>
</template>

<script setup lang="ts">
import type { FooterLink } from '~/types/bootstrap'

const { bootstrap, profile } = useBootstrap()

const usefulLinks = computed<FooterLink[]>(() => {
  return [
    ...(bootstrap.value?.menu.links ?? []),
    {
      name: $t('resume'),
      url: profile?.resumeUrl
    }
  ]
})

const contactLink = computed<FooterLink>(() => {
  return {
    name: profile.email,
    url: `mailto:${profile.email}`
  }
})
</script>
