<template>
  <Container :ui="{ inner: 'py-14 min-h-[70vh] flex items-center' }">
    <div class="space-y-12">
      <div class="flex items-center gap-6">
        <div class="flex flex-col gap-6">
          <div class="flex items-center gap-2 text-lg">
            <Icon name="lucide:hand" class="-rotate-33" />
            <span v-text="$t('greeting')" />
          </div>

          <div class="flex flex-col">
            <h1
              class="text-default text-3xl lg:text-4xl xl:text-5xl"
              v-text="$t('greetingName', { name: $t('name') })"
            />
            <h2
              class="text-5xl leading-tight font-medium lg:text-6xl xl:text-7xl"
              v-text="`${$t('position')}.`"
            />
          </div>
        </div>
      </div>

      <div class="space-y-4">
        <div class="prose-lg xl:prose-xl">
          <p v-text="$t('intro')" />
        </div>
      </div>
    </div>
  </Container>
</template>
