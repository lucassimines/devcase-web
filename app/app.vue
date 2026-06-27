<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
import type { Bootstrap } from '~/types/bootstrap'
import { resolveLocaleCode } from '~/utils/locale'

const { data } = await useApi<Bootstrap>('/bootstrap', { lazy: false })

const { bootstrap } = useBootstrap()
const { setAppLocale, localeCookie } = useLocale()

if (data.value) {
  bootstrap.value = data.value
}

onMounted(async () => {
  const { $i18n } = useNuxtApp()
  const detected =
    resolveLocaleCode(localeCookie.value) || resolveLocaleCode($i18n.getBrowserLocale())

  if (detected) {
    await setAppLocale(detected)
  }
})

useSiteSeo()
</script>
