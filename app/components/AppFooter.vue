<template>
  <footer class="divide-muted border-muted divide-y border-t">
    <Container :ui="{ inner: 'py-10 flex gap-6 justify-between' }">
      <span class="text-elevated font-mono text-sm" v-text="$t('app.by')" />

      <span class="font-mono text-sm text-emerald-300" v-text="$t('app.poweredBy')" />
    </Container>

    <Container :ui="{ inner: 'py-4' }">
      <span
        class="text-elevated font-mono text-xs"
        v-text="$t('app.copyright', { year: new Date().getFullYear() })"
      />
    </Container>
  </footer>
</template>
