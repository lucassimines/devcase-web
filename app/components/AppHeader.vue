<template>
  <header
    class="px-main sticky top-0 left-0 h-16 w-full border-b border-white/10 bg-black/10 backdrop-blur-3xl"
  >
    <div class="mx-auto flex h-full max-w-5xl items-center">
      <NuxtLink to="/" class="flex items-center gap-4">
        <Logo />

        <span
          class="text-gray-elevated font-mono text-sm tracking-wider uppercase"
          v-text="$t('name')"
        />
      </NuxtLink>
    </div>
  </header>
</template>
