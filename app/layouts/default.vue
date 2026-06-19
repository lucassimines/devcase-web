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
useSiteSeo()

useHead({
  link: [
    {
      rel: 'icon',
      href: '/favicon.ico'
    },
    {
      rel: 'apple-touch-icon',
      href: '/images/avatar.jpg'
    }
  ]
})
</script>
