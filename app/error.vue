<template>
  <div class="relative h-screen">
    <DotBackgroundAnimated />

    <div class="px-main relative z-10 flex h-full flex-col items-center justify-center gap-8">
      <div class="flex flex-col items-center">
        <FlickerText text="404" :ui="{ base: 'text-7xl sm:text-8xl' }" />

        <FlickerText
          :ui="{ base: 'font-mono tracking-wider text-sm sm:text-lg' }"
          :text="$t('error.404')"
        />
      </div>

      <Button to="/" size="md" :ui="{ base: 'sm:min-w-42' }" :text="$t('error.goHome')" />
    </div>
  </div>
</template>

<script setup lang="ts"></script>
