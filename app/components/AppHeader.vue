<template>
  <header
    class="px-main sticky top-0 left-0 z-99 h-16 w-full border-b border-white/10 bg-black/50 backdrop-blur-3xl"
  >
    <div class="mx-auto flex h-full max-w-5xl items-center">
      <NuxtLink to="/" class="flex items-center gap-4">
        <Logo />

        <span
          class="font-mono text-sm tracking-wider text-white/80 uppercase"
          v-text="$t('name')"
        />
      </NuxtLink>
    </div>
  </header>
</template>
