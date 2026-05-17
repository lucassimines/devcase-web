<template>
  <ButtonMenu />

  <MobileNavigation />

  <AppHeader />

  <div class="flex flex-1 flex-col">
    <div class="grow">
      <slot />
    </div>
  </div>

  <AppFooter />
</template>

<script setup lang="ts">
useHead({
  title: `${$t('name')} - ${$t('position')}`,
  meta: [
    {
      name: 'description',
      content: $t('meta.description')
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
