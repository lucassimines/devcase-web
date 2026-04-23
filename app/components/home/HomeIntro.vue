<template>
  <Container :ui="{ inner: 'py-14 min-h-[70vh] flex items-center' }">
    <div class="space-y-12">
      <div class="flex items-center gap-6">
        <!-- <figure class="size-32 flex-none overflow-hidden rounded-full">
          <NuxtImg src="/images/avatar.jpg" alt="Lucas Simines" class="size-full object-cover" />
        </figure> -->

        <div class="flex flex-col gap-6">
          <div class="flex items-center gap-2 text-lg">
            <Icon name="lucide:hand" class="-rotate-33" />
            <span v-text="$t('greeting')" />
          </div>

          <div class="flex flex-col">
            <h1 class="text-default text-5xl" v-text="`I'm ${$t('name')},`" />
            <h2 class="text-7xl leading-tight font-medium" v-text="`${$t('position')}.`" />
          </div>
        </div>
      </div>

      <div class="space-y-4">
        <div class="prose-xl">
          <p v-text="$t('intro')" />
        </div>
      </div>
    </div>
  </Container>
</template>
