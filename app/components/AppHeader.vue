<template>
  <Container
    tag="header"
    :ui="{
      base: 'sticky top-0 left-0 z-99 h-16 w-full border-b border-white/10 bg-gray-950/5 backdrop-blur-3xl',
      inner: 'flex items-center h-full gap-6'
    }"
  >
    <div class="flex-none">
      <NuxtLink to="/">
        <Logo />
      </NuxtLink>
    </div>

    <div class="flex h-full grow justify-end gap-8">
      <nav v-if="bootstrap?.menu?.length" class="h-full">
        <ul class="flex h-full items-center gap-8">
          <li v-for="item in bootstrap.menu" :key="item.id" class="-mb-px h-full">
            <NuxtLink
              :to="`/${item.slug}`"
              :class="{
                'router-link-active': item.slug && route.path.startsWith(`/${item.slug}`)
              }"
              class="flex h-full items-center border-b border-transparent transition-colors hover:border-white/20"
            >
              {{ item.name }}
            </NuxtLink>
          </li>
        </ul>
      </nav>

      <div class="flex items-center gap-6">
        <NuxtLink
          v-for="socialMedia in socialMedias"
          :key="socialMedia.name"
          :to="socialMedia.url"
          target="_blank"
          class="hover:text-brand - flex items-center justify-center text-2xl"
          ><Icon :name="socialMedia.icon"
        /></NuxtLink>
      </div>
    </div>
  </Container>
</template>

<script setup lang="ts">
const { bootstrap } = useBootstrap()

const route = useRoute()

interface SocialMedia {
  name: string
  url: string
  icon: string
}

const socialMedias: SocialMedia[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/lucassimines',
    icon: 'uil:github'
  }
]
</script>

<style>
.router-link-active {
  border-bottom-color: var(--color-brand);
}
</style>
