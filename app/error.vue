<template>
  <div class="relative h-screen">
    <DotBackgroundAnimated />

    <div class="px-main relative z-10 flex h-full flex-col items-center justify-center gap-4">
      <div class="flex flex-col items-center">
        <FlickerText
          :text="error?.status?.toString() ?? '404'"
          :ui="{ base: 'text-7xl sm:text-8xl' }"
        />

        <FlickerText
          :ui="{ base: 'font-mono tracking-wider text-sm sm:text-lg text-center' }"
          :text="$t('error.404')"
        />
      </div>

      <Button
        to="/"
        size="md"
        :ui="{ base: 'sm:min-w-42' }"
        :text="$t('error.goHome')"
        use-default-icon
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const error = useError()
const { t } = useI18n()

useSiteSeo({
  title: () => t('seo.errorTitle'),
  description: () => t('seo.errorDescription'),
  robots: 'noindex, nofollow'
})
</script>
