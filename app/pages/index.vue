<template>
  <Container :ui="{ inner: 'py-10' }">
    <h1 v-text="$t('greeting', { name: $t('name') })" />
  </Container>
</template>

<script setup lang="ts">
useHead({
  title: 'Lucas Biondo Simines - Resume',
  meta: [
    {
      name: 'description',
      content:
        'I specialize in frontend architecture using Nuxt, Vue, SSR, and Vercel, while also developing robust backend solutions with Laravel. I particularly enjoy building projects from scratch — taking ideas from concept to production with a strong emphasis on clean architecture and long-term scalability.'
    }
  ],
  link: [
    {
      rel: 'apple-touch-icon',
      href: '/images/og-image.png'
    }
  ]
})
</script>
