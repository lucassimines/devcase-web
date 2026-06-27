<template>
  <nav v-if="locales.length > 1" class="flex items-center gap-1">
    <button
      v-for="item in locales"
      :key="item.code"
      type="button"
      class="rounded px-2 py-1 font-mono text-xs uppercase transition-colors"
      :class="
        locale === item.code
          ? 'bg-white/10 text-white'
          : 'text-muted hover:bg-white/5 hover:text-white'
      "
      :aria-label="item.name"
      :aria-current="locale === item.code ? 'true' : undefined"
      @click="handleLocaleChange(item.code)"
      v-text="item.abbr"
    />
  </nav>
</template>

<script setup lang="ts">
import type { LocaleCode } from '~/types/locale'

const { locales } = useAppConfig()
const { locale, setAppLocale } = useLocale()

async function handleLocaleChange(code: LocaleCode) {
  await setAppLocale(code)
}
</script>
