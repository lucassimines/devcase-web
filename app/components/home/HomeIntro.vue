<template>
  <Container :ui="{ inner: 'py-14 min-h-[70vh] flex items-center' }">
    <div class="space-y-12">
      <div class="flex items-center gap-6">
        <figure class="size-32 overflow-hidden rounded-full">
          <NuxtImg src="/images/avatar.jpg" alt="Lucas Simines" class="size-full object-cover" />
        </figure>

        <div class="space-y-1.5">
          <h2 class="text-3xl leading-tight" v-text="$t('name')" />

          <h3
            class="text-elevated italic"
            v-text="`${$t('position')} ${$t('basedIn')} ${$t('location')}`"
          />
        </div>
      </div>

      <div class="space-y-4">
        <div class="flex items-center gap-2 text-lg">
          <Icon name="lucide:hand" class="-rotate-33" />
          <span v-text="$t('greeting')" />
        </div>

        <div class="prose">
          <p class="text-xl" v-text="$t('intro')" />
        </div>
      </div>
    </div>
  </Container>
</template>
