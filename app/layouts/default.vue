<template>
  <AppHeader />

  <div class="flex min-h-screen flex-col">
    <slot />
  </div>

  <AppFooter />
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
