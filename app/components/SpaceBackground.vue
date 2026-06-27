<template>
  <div class="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
    <div class="space-bg__nebula space-bg__nebula--blue" />
    <div class="space-bg__nebula space-bg__nebula--purple" />
    <div class="space-bg__stars space-bg__stars--far" />
    <div class="space-bg__stars space-bg__stars--near" />
    <div class="space-bg__fade" />
  </div>
</template>

<style scoped>
.space-bg__nebula {
  position: absolute;
  filter: blur(48px);
}

.space-bg__nebula--blue {
  top: -25%;
  left: 50%;
  width: 130%;
  height: 110%;
  transform: translateX(-50%);
  background: radial-gradient(ellipse 55% 45% at 50% 35%, rgba(0, 85, 255, 0.14), transparent 72%);
}

.space-bg__nebula--purple {
  top: 5%;
  right: -15%;
  width: 55%;
  height: 65%;
  background: radial-gradient(ellipse 50% 50% at 50% 50%, rgba(124, 58, 237, 0.1), transparent 70%);
}

.space-bg__stars {
  position: absolute;
  inset: 0;
}

.space-bg__stars--far {
  opacity: 0.35;
  background-image: radial-gradient(circle, rgba(255, 255, 255, 0.35) 0.5px, transparent 0.5px);
  background-size: 96px 96px;
  animation: space-drift 120s linear infinite;
}

.space-bg__stars--near {
  opacity: 0.55;
  background-image:
    radial-gradient(1.5px 1.5px at 18% 22%, rgba(255, 255, 255, 0.75), transparent),
    radial-gradient(1px 1px at 42% 14%, rgba(255, 255, 255, 0.45), transparent),
    radial-gradient(1px 1px at 68% 28%, rgba(255, 255, 255, 0.55), transparent),
    radial-gradient(1.5px 1.5px at 84% 18%, rgba(255, 255, 255, 0.65), transparent),
    radial-gradient(1px 1px at 12% 58%, rgba(255, 255, 255, 0.4), transparent),
    radial-gradient(1px 1px at 31% 72%, rgba(255, 255, 255, 0.5), transparent),
    radial-gradient(1.5px 1.5px at 55% 48%, rgba(255, 255, 255, 0.6), transparent),
    radial-gradient(1px 1px at 76% 62%, rgba(255, 255, 255, 0.45), transparent),
    radial-gradient(1px 1px at 91% 44%, rgba(255, 255, 255, 0.35), transparent),
    radial-gradient(1px 1px at 24% 38%, rgba(255, 255, 255, 0.3), transparent),
    radial-gradient(1.5px 1.5px at 63% 8%, rgba(255, 255, 255, 0.5), transparent),
    radial-gradient(1px 1px at 48% 82%, rgba(255, 255, 255, 0.35), transparent);
  animation: space-twinkle 8s ease-in-out infinite alternate;
}

.space-bg__fade {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    transparent 45%,
    rgb(9 13 18 / 0.65) 78%,
    rgb(9 13 18) 100%
  );
}

@keyframes space-drift {
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    transform: translate3d(-48px, -32px, 0);
  }
}

@keyframes space-twinkle {
  from {
    opacity: 0.45;
  }

  to {
    opacity: 0.65;
  }
}
</style>
