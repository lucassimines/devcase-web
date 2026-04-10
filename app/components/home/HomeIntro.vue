<template>
  <Container :ui="{ inner: 'py-14 min-h-[70vh] flex items-center' }">
    <div class="space-y-12">
      <div class="flex items-center gap-6">
        <figure class="size-32 overflow-hidden rounded-full">
          <NuxtImg src="/images/avatar.jpg" alt="Lucas Simines" class="size-full object-cover" />
        </figure>

        <div class="space-y-0.5">
          <h2 class="text-xl leading-tight" v-text="$t('name')" />
          <h3 class="text-elevated font-sans" v-text="$t('position')" />
        </div>
      </div>

      <div class="space-y-4">
        <div>
          <h1 v-text="$t('greeting')" />
        </div>

        <div class="prose">
          <p class="text-xl" v-text="$t('intro')" />
        </div>
      </div>
    </div>
  </Container>
</template>
