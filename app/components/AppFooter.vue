<template>
  <footer class="divide-y divide-white/10 border-t border-white/10">
    <Container :ui="{ inner: 'py-10 flex gap-6 justify-between' }">
      <span class="text-elevated text-sm" v-text="$t('app.by')" />

      <span class="text-sm text-emerald-300" v-text="$t('app.builtWith')" />
    </Container>

    <Container :ui="{ inner: 'py-4' }">
      <div class="col-span-full">
        <span
          class="text-xs text-gray-500"
          v-text="$t('app.copyright', { year: new Date().getFullYear() })"
        />
      </div>
    </Container>
  </footer>
</template>
