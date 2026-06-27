<template>
  <NuxtImg
    :src="`/images/logo${mono ? '-mono' : ''}.svg`"
    :alt="profile.name"
    :class="logo({ size })"
  />
</template>

<script setup lang="ts">
interface Props {
  size?: 'xs' | 'sm'
  mono?: boolean
}

const { profile } = useBootstrap()

withDefaults(defineProps<Props>(), {
  size: 'sm'
})

const logo = tv({
  variants: {
    size: {
      xs: 'w-8 sm:w-10',
      sm: 'w-10 sm:w-12'
    }
  }
})
</script>
