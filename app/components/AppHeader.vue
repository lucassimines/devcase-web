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

    <div class="flex h-full grow justify-end">
      <nav v-if="bootstrap?.menu?.length" class="h-full">
        <ul class="flex h-full items-center gap-6">
          <li v-for="item in bootstrap.menu" :key="item.id" class="-mb-px h-full">
            <NuxtLink
              :to="`/${item.slug}`"
              class="flex h-full items-center border-b border-transparent transition-colors hover:border-white/20"
            >
              {{ item.name }}
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </Container>
</template>

<script setup lang="ts">
const { bootstrap } = useBootstrap()
</script>

<style>
.router-link-exact-active {
  border-bottom-color: var(--color-brand);
}
</style>
