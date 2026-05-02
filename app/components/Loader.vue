<template>
  <div class="relative flex min-h-[90vh] w-full items-center justify-center overflow-hidden">
    <!-- dots -->
    <div
      class="pointer-events-none absolute inset-0 animate-[move-dots_5s_linear_infinite] bg-[radial-gradient(circle,rgba(255,255,255,0.15)_1px,transparent_1px)] bg-size-[24px_24px]"
    ></div>

    <!-- content -->
    <div class="relative z-10 flex items-center gap-2">
      <div class="font-mono font-semibold sm:text-xl" v-text="$t('loading')" />
      <div class="h-4 w-2 animate-[blink_1s_linear_infinite] bg-white" />
    </div>
  </div>
</template>
