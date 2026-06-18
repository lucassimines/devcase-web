<template>
  <!-- Menu height placeholder -->
  <div class="h-menu" />

  <Container
    tag="header"
    :ui="{
      base: 'fixed top-0 left-0 z-99 h-menu w-full border-b border-white/10 bg-gray-950/80 backdrop-blur-3xl',
      inner: 'flex items-center h-full gap-6'
    }"
  >
    <div class="grow">
      <NuxtLink to="/">
        <Logo />
      </NuxtLink>
    </div>

    <div class="flex h-full justify-end gap-8 max-sm:hidden">
      <nav v-if="bootstrap?.menu?.links?.length">
        <ul class="flex h-full items-center gap-8">
          <li v-for="link in bootstrap.menu.links" :key="link.id" class="-mb-px h-full">
            <NuxtLink
              :to="`/${link.slug}`"
              :class="{
                'router-link-active': link.slug && route.path.startsWith(`/${link.slug}`)
              }"
              class="flex h-full items-center border-b border-transparent transition-colors hover:border-white/20"
            >
              {{ link.name }}
            </NuxtLink>
          </li>
        </ul>
      </nav>

      <div v-if="github" class="flex items-center gap-6">
        <ButtonSocialMedia :social-media="github" :ui="{ base: 'text-2xl' }" />
      </div>
    </div>
  </Container>
</template>

<script setup lang="ts">
const { bootstrap, github } = useBootstrap()

const route = useRoute()
</script>

<style>
.router-link-active {
  border-bottom-color: var(--color-brand);
}
</style>
