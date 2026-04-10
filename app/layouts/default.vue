<template>
  <div>
    <AppHeader />

    <slot />

    <AppFooter />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: `${$t('name')} - ${$t('position')}`,
  meta: [
    {
      name: 'description',
      content: $t('intro')
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
