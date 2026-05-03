<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
import type { Bootstrap } from '~/types/bootstrap'

const { data } = await useApi<Bootstrap>('/bootstrap', { lazy: false })

const { bootstrap } = useBootstrap()

if (data.value) {
  bootstrap.value = data.value
}
</script>
