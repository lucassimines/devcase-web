<template>
  <div :class="base()">
    <!-- dots -->
    <div :class="dots()"></div>

    <!-- content -->
    <div :class="content()">
      <div :class="flicker()" :data-text="$t('loading')" v-text="$t('loading')" />
    </div>
  </div>
</template>

<script setup lang="ts">
const loader = tv({
  slots: {
    base: 'relative flex min-h-[90vh] w-full items-center justify-center overflow-hidden',
    dots: [
      'pointer-events-none absolute inset-0 animate-[move-dots_5s_linear_infinite]',
      'bg-[radial-gradient(circle,rgba(255,255,255,0.15)_1px,transparent_1px)] bg-size-[24px_24px]'
    ],
    content: 'relative z-10 flex items-center gap-2',
    flicker: 'signal-flicker font-mono font-semibold text-white/70 sm:text-lg'
  }
})

const { base, dots, content, flicker } = loader()
</script>

<style scoped>
.signal-flicker {
  position: relative;
  display: inline-block;
  animation:
    signal-flicker 3s steps(1, end) infinite,
    signal-jitter 1.6s steps(1, end) infinite;
}

.signal-flicker::before,
.signal-flicker::after {
  content: attr(data-text);
  position: absolute;
  inset: 0;
  opacity: 0;
  pointer-events: none;
}

.signal-flicker::before {
  color: rgba(255, 255, 255, 0.72);
  transform: translate(-1px, 0);
  animation:
    signal-offset-a 3s steps(1, end) infinite,
    signal-slice-a 1.2s steps(1, end) infinite;
}

.signal-flicker::after {
  color: rgba(255, 255, 255, 0.38);
  transform: translate(1px, 0);
  animation:
    signal-offset-b 3s steps(1, end) infinite,
    signal-slice-b 1.3s steps(1, end) infinite;
}

@keyframes signal-flicker {
  0%,
  12%,
  18%,
  33%,
  52%,
  67%,
  100% {
    opacity: 1;
    text-shadow:
      0 0 2px rgba(255, 255, 255, 0.35),
      -0.5px 0 rgba(255, 255, 255, 0.18),
      0.5px 0 rgba(255, 255, 255, 0.12);
  }

  13%,
  34%,
  68% {
    opacity: 0.82;
    text-shadow: none;
  }

  14%,
  15%,
  35%,
  36%,
  69% {
    opacity: 0.78;
    text-shadow: none;
  }

  16%,
  37%,
  70% {
    opacity: 0.7;
    text-shadow:
      -1px 0 rgba(255, 255, 255, 0.45),
      1px 0 rgba(255, 255, 255, 0.28);
  }
}

@keyframes signal-offset-a {
  0%,
  12%,
  18%,
  33%,
  52%,
  67%,
  100% {
    opacity: 0.16;
  }

  13%,
  16%,
  34%,
  37%,
  68%,
  70% {
    opacity: 0.9;
  }
}

@keyframes signal-offset-b {
  0%,
  12%,
  18%,
  33%,
  52%,
  67%,
  100% {
    opacity: 0.1;
  }

  13%,
  16%,
  34%,
  37%,
  68%,
  70% {
    opacity: 0.75;
  }
}

@keyframes signal-jitter {
  0%,
  100% {
    transform: translate(0, 0);
  }

  9% {
    transform: translate(-0.5px, 0);
  }

  10% {
    transform: translate(0.5px, 0);
  }

  11% {
    transform: translate(0, 0);
  }

  31% {
    transform: translate(0, -0.5px);
  }

  32% {
    transform: translate(0, 0.5px);
  }

  33% {
    transform: translate(0, 0);
  }

  63% {
    transform: translate(-0.5px, 0.5px);
  }

  64% {
    transform: translate(0.5px, -0.5px);
  }

  65% {
    transform: translate(0, 0);
  }
}

@keyframes signal-slice-a {
  0%,
  100% {
    clip-path: inset(0 0 0 0);
  }

  12% {
    clip-path: inset(0 0 62% 0);
    transform: translate(-2px, 0);
  }

  13% {
    clip-path: inset(62% 0 0 0);
    transform: translate(-1px, 0);
  }

  35% {
    clip-path: inset(38% 0 32% 0);
    transform: translate(-2px, -0.5px);
  }

  36% {
    clip-path: inset(0 0 0 0);
    transform: translate(-1px, 0);
  }
}

@keyframes signal-slice-b {
  0%,
  100% {
    clip-path: inset(0 0 0 0);
  }

  16% {
    clip-path: inset(54% 0 0 0);
    transform: translate(2px, 0);
  }

  17% {
    clip-path: inset(0 0 58% 0);
    transform: translate(1px, 0);
  }

  68% {
    clip-path: inset(28% 0 40% 0);
    transform: translate(2px, 0.5px);
  }

  69% {
    clip-path: inset(0 0 0 0);
    transform: translate(1px, 0);
  }
}
</style>
