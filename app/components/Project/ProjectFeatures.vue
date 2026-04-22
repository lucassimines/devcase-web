<template>
  <div class="space-y-4">
    <PageSubtitle :title="title" :icon="icon" />

    <ul class="flex flex-wrap gap-2">
      <li v-for="item in items">
        <slot :item="item" />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts" generic="T">
defineProps<{
  title: string
  icon: string
  items: T[]
}>()
</script>
