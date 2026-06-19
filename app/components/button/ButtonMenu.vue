<template>
  <div class="fixed top-0 right-0 z-101 size-12 sm:hidden">
    <button
      class="relative size-12"
      type="button"
      :aria-label="navigationState ? 'Close navigation menu' : 'Open navigation menu'"
      @click="toggleMenu"
    >
      <span
        :class="[
          line(),
          navigationState
            ? {
                'rotate-45': !isJoining,
                'rotate-0': isJoining
              }
            : {
                'translate-y-0': isJoining,
                '-translate-y-1': !isJoining
              }
        ]"
      />

      <span
        :class="[
          line(),
          navigationState
            ? {
                '-rotate-45': !isJoining,
                'rotate-0': isJoining
              }
            : {
                'translate-y-0': isJoining,
                'translate-y-1': !isJoining
              }
        ]"
      />
    </button>
  </div>
</template>

<script setup lang="ts">
const { navigationState } = useBootstrap()
const isJoining = ref(false)

async function toggleMenu() {
  isJoining.value = true

  setTimeout(() => {
    navigationState.value = !navigationState.value

    isJoining.value = false
  }, 100)
}

const menu = tv({
  slots: {
    line: 'absolute top-1/2 left-1/2 h-px w-5 -translate-x-1/2 rounded-full bg-gray-50 transition-all duration-250'
  }
})

const { line } = menu()
</script>
