<template>
  <div :class="base()">
    <DotBackgroundAnimated />

    <!-- content -->
    <div :class="content()">
      <FlickerText :text="$t('loading')" :ui="{ base: 'sm:text-lg' }" />
    </div>
  </div>
</template>

<script setup lang="ts">
const loader = tv({
  slots: {
    base: 'relative flex min-h-[90vh] w-full items-center justify-center overflow-hidden',
    content: 'relative z-10 flex items-center gap-2',
    flicker: 'signal-flicker font-mono font-semibold text-white/70 sm:text-lg'
  }
})

const { base, content } = loader()
</script>
