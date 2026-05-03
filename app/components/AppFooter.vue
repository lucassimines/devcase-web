<template>
  <footer class="divide-y divide-white/10 border-t border-white/10">
    <Container
      :ui="{
        inner: 'py-6 sm:py-10 max-sm:flex-col max-sm:items-center flex gap-6 sm:justify-between'
      }"
    >
      <span class="text-sm text-emerald-300" v-text="$t('app.builtWith')" />
    </Container>

    <Container :ui="{ inner: 'py-4 flex justify-between items-center gap-6' }">
      <span
        class="text-xs text-gray-500"
        v-text="$t('app.copyright', { year: new Date().getFullYear() })"
      />

      <NuxtLink to="/">
        <Logo size="xs" mono />
      </NuxtLink>
    </Container>
  </footer>
</template>
