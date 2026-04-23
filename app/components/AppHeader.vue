<template>
  <Container
    tag="header"
    :ui="{
      base: 'sticky top-0 left-0 z-99 h-16 w-full border-b border-white/10 bg-gray-950/5 backdrop-blur-3xl',
      inner: 'flex items-center h-full'
    }"
  >
    <div class="flex items-center gap-4">
      <NuxtLink to="/">
        <Logo />
      </NuxtLink>

      <div class="flex items-center gap-1">
        <Icon name="lucide:dollar-sign" class="text-sm text-white/30" />

        <span
          class="font-mono text-sm tracking-wider text-white/80 lowercase"
          v-text="currentPage"
        />
      </div>
    </div>
  </Container>
</template>

<script setup lang="ts">
const route = useRoute()

const currentPage = computed(() => {
  return route.name?.toString().toLowerCase().replaceAll(' ', '_')
})
</script>
