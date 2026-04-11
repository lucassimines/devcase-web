<template>
  <Container :ui="{ inner: 'relative py-10 min-h-100 flex items-center justify-between gap-6' }">
    <div class="flex flex-col gap-14">
      <div>
        <h1 class="text-5xl" v-text="name" />
      </div>

      <div class="space-y-3">
        <h2 class="text-elevated flex items-center gap-2 text-xl">
          <Icon name="lucide:layers" size="22" />
          <span v-text="$t('stack')" />
        </h2>

        <ul class="flex gap-2">
          <li v-for="technology in technologies" :key="technology.id">
            <Pill :label="technology.name" :to="technology.url" />
          </li>
        </ul>
      </div>
    </div>

    <div class="space-y-2">
      <NuxtLink
        :to="url"
        target="_blank"
        class="text-elevated flex items-center gap-2 font-mono text-xl hover:text-gray-50"
        ><Icon name="lucide:external-link" size="22" /> {{ prettyUrl }}</NuxtLink
      >
    </div>
  </Container>
</template>

<script setup lang="ts">
const props = defineProps<{
  name: string
  url: string
}>()

const prettyUrl = computed(() => {
  return new URL(props.url).hostname
})

const technologies: Technology[] = [
  {
    id: 1,
    name: 'Vue.js',
    url: 'https://vuejs.org',
    image: '/images/technologies/vue.svg'
  },
  {
    id: 2,
    name: 'Nuxt.js',
    url: 'https://nuxt.com',
    image: '/images/technologies/nuxt.svg'
  }
]
</script>
