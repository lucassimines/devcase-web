<template>
  <ClientOnly>
    <div
      ref="containerRef"
      class="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      <canvas ref="canvasRef" class="absolute inset-0 size-full" />

      <div class="space-bg__glow" />
      <div class="space-bg__nebula space-bg__nebula--blue" />
      <div class="space-bg__nebula space-bg__nebula--purple" />
      <div class="space-bg__fade" />
    </div>
  </ClientOnly>
</template>

<script setup lang="ts">
interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  opacity: number
}

const canvasRef = ref<HTMLCanvasElement | null>(null)
const containerRef = ref<HTMLDivElement | null>(null)

const PARTICLE_COUNT = 48
const MAX_DISTANCE = 148
const MAX_LINE_OPACITY = 0.14
const MAX_NODE_OPACITY = 0.45

let particles: Particle[] = []
let width = 0
let height = 0
let dpr = 1
let animationFrame = 0
let resizeFrame = 0
let isVisible = true
let prefersReducedMotion = false

function createParticles() {
  particles = Array.from({ length: PARTICLE_COUNT }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    vx: (Math.random() - 0.5) * 0.22,
    vy: (Math.random() - 0.5) * 0.22,
    radius: Math.random() * 0.75 + 0.75,
    opacity: Math.random() * 0.22 + 0.18
  }))
}

function resizeCanvas() {
  const canvas = canvasRef.value
  const container = containerRef.value

  if (!canvas || !container) return

  const nextWidth = container.clientWidth
  const nextHeight = container.clientHeight

  if (!nextWidth || !nextHeight) return

  const prevWidth = width
  const prevHeight = height

  dpr = Math.min(window.devicePixelRatio || 1, 2)
  width = nextWidth
  height = nextHeight

  canvas.width = Math.floor(width * dpr)
  canvas.height = Math.floor(height * dpr)
  canvas.style.width = `${width}px`
  canvas.style.height = `${height}px`

  if (!particles.length) {
    createParticles()
    return
  }

  if (prevWidth > 0 && prevHeight > 0) {
    const scaleX = width / prevWidth
    const scaleY = height / prevHeight

    for (const particle of particles) {
      particle.x = Math.min(particle.x * scaleX, width)
      particle.y = Math.min(particle.y * scaleY, height)
    }

    return
  }

  createParticles()
}

function scheduleResize() {
  window.cancelAnimationFrame(resizeFrame)
  resizeFrame = window.requestAnimationFrame(() => {
    resizeCanvas()

    if (prefersReducedMotion || !isVisible) {
      drawStaticFrame()
    }
  })
}

function drawStaticFrame() {
  const canvas = canvasRef.value
  const context = canvas?.getContext('2d')

  if (!canvas || !context) return

  context.setTransform(dpr, 0, 0, dpr, 0, 0)
  context.clearRect(0, 0, width, height)
  drawNetwork(context)
}

function drawNetwork(context: CanvasRenderingContext2D) {
  const maxDistanceSq = MAX_DISTANCE * MAX_DISTANCE

  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const first = particles[i]
      const second = particles[j]

      if (!first || !second) continue

      const dx = first.x - second.x
      const dy = first.y - second.y
      const distanceSq = dx * dx + dy * dy

      if (distanceSq >= maxDistanceSq) continue

      const distance = Math.sqrt(distanceSq)
      const alpha = (1 - distance / MAX_DISTANCE) * MAX_LINE_OPACITY

      context.beginPath()
      context.moveTo(first.x, first.y)
      context.lineTo(second.x, second.y)
      context.strokeStyle = `rgba(186, 200, 219, ${alpha})`
      context.lineWidth = 0.75
      context.stroke()
    }
  }

  for (const particle of particles) {
    context.beginPath()
    context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
    context.fillStyle = `rgba(255, 255, 255, ${particle.opacity * MAX_NODE_OPACITY})`
    context.fill()
  }
}

function tick() {
  if (!isVisible || prefersReducedMotion) return

  const canvas = canvasRef.value
  const context = canvas?.getContext('2d')

  if (!canvas || !context) return

  context.setTransform(dpr, 0, 0, dpr, 0, 0)
  context.clearRect(0, 0, width, height)

  for (const particle of particles) {
    particle.x += particle.vx
    particle.y += particle.vy

    if (particle.x <= 0 || particle.x >= width) {
      particle.vx *= -1
      particle.x = Math.max(0, Math.min(width, particle.x))
    }

    if (particle.y <= 0 || particle.y >= height) {
      particle.vy *= -1
      particle.y = Math.max(0, Math.min(height, particle.y))
    }
  }

  drawNetwork(context)
  animationFrame = window.requestAnimationFrame(tick)
}

function startAnimation() {
  window.cancelAnimationFrame(animationFrame)

  if (prefersReducedMotion) {
    drawStaticFrame()
    return
  }

  if (isVisible) {
    animationFrame = window.requestAnimationFrame(tick)
  }
}

function stopAnimation() {
  window.cancelAnimationFrame(animationFrame)
  animationFrame = 0
}

let resizeObserver: ResizeObserver | undefined
let intersectionObserver: IntersectionObserver | undefined
let motionMediaQuery: MediaQueryList | undefined

function onMotionPreferenceChange(event: MediaQueryListEvent) {
  prefersReducedMotion = event.matches
  startAnimation()
}

onMounted(() => {
  prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  motionMediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
  motionMediaQuery.addEventListener('change', onMotionPreferenceChange)

  scheduleResize()
  startAnimation()

  resizeObserver = new ResizeObserver(scheduleResize)

  if (containerRef.value) {
    resizeObserver.observe(containerRef.value)
  }

  intersectionObserver = new IntersectionObserver(
    ([entry]) => {
      isVisible = entry?.isIntersecting ?? true

      if (isVisible) {
        scheduleResize()
        startAnimation()
      } else {
        stopAnimation()
      }
    },
    { threshold: 0 }
  )

  if (containerRef.value) {
    intersectionObserver.observe(containerRef.value)
  }
})

onUnmounted(() => {
  stopAnimation()
  window.cancelAnimationFrame(resizeFrame)
  resizeObserver?.disconnect()
  intersectionObserver?.disconnect()
  motionMediaQuery?.removeEventListener('change', onMotionPreferenceChange)
})
</script>

<style scoped>
.space-bg__glow {
  position: absolute;
  top: 8%;
  left: 12%;
  width: 50%;
  height: 75%;
  background: radial-gradient(ellipse at center, rgba(0, 85, 255, 0.04), transparent 70%);
  filter: blur(40px);
}

.space-bg__nebula {
  position: absolute;
  filter: blur(56px);
}

.space-bg__nebula--blue {
  top: -28%;
  left: 50%;
  width: 115%;
  height: 95%;
  transform: translateX(-50%);
  background: radial-gradient(ellipse 50% 40% at 50% 38%, rgba(0, 85, 255, 0.06), transparent 74%);
}

.space-bg__nebula--purple {
  top: 0;
  right: -8%;
  width: 42%;
  height: 52%;
  background: radial-gradient(
    ellipse 50% 50% at 50% 50%,
    rgba(124, 58, 237, 0.05),
    transparent 72%
  );
}

.space-bg__fade {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    transparent 38%,
    rgb(9 13 18 / 0.5) 78%,
    rgb(9 13 18) 100%
  );
}
</style>
