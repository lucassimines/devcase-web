<template>
  <nav :key="$route.fullPath" class="mt-16 flex justify-center lg:mt-20" aria-label="Pagination">
    <ul class="flex items-center gap-2 md:gap-3">
      <li>
        <PaginationItem
          v-if="!isFirstPage"
          :to="pageTo(currentPage - 1)"
          :label="$t('previous')"
          icon="lucide:chevron-left"
        />
      </li>

      <li v-for="item in visibleItems" :key="item.key">
        <span v-if="item.type === 'ellipsis'" aria-hidden="true" v-text="'...'" />

        <PaginationItem
          v-else
          :to="pageTo(item.page)"
          :label="item.page"
          :aria-current="item.page === currentPage ? 'page' : undefined"
        />
      </li>

      <li>
        <PaginationItem
          v-if="!isLastPage"
          :to="pageTo(currentPage + 1)"
          icon="lucide:chevron-right"
          :label="$t('next')"
        />
      </li>
    </ul>
  </nav>
</template>

<script lang="ts" setup>
import type { RouteLocationRaw } from 'vue-router'

const props = defineProps<{
  page: number
  pages: number
  canonicalRouteName: string
  paginatedRouteName: string
}>()

type PageItem = { key: string; type: 'page'; page: number } | { key: string; type: 'ellipsis' }

const route = useRoute()

const currentPage = computed(() => {
  const page = Number(props.page || 1)
  return Number.isNaN(page) || page < 1 ? 1 : page
})

const isFirstPage = computed(() => currentPage.value <= 1)

const isLastPage = computed(() => currentPage.value >= props.pages)

const visibleItems = computed<PageItem[]>(() => {
  const total = props.pages

  if (total <= 7) {
    return Array.from({ length: total }, (_, i) => ({
      key: `page-${i + 1}`,
      type: 'page' as const,
      page: i + 1
    }))
  }

  const current = currentPage.value
  const pages = new Set<number>([1, total, current - 1, current, current + 1])

  if (current <= 3) {
    pages.add(2)
    pages.add(3)
  }

  if (current >= total - 2) {
    pages.add(total - 1)
    pages.add(total - 2)
  }

  const sortedPages = [...pages].filter((page) => page > 0 && page <= total).sort((a, b) => a - b)
  const items: PageItem[] = []

  let previousPage: number | null = null

  for (const page of sortedPages) {
    const hasGap = previousPage !== null && page - previousPage > 1

    if (hasGap) {
      items.push({
        key: `ellipsis-${previousPage}-${page}`,
        type: 'ellipsis'
      })
    }

    items.push({
      key: `page-${page}`,
      type: 'page',
      page
    })

    previousPage = page
  }

  return items
})

function pageTo(page: number): RouteLocationRaw {
  const params = { ...route.params }
  delete params.page

  if (page === 1) {
    return { name: props.canonicalRouteName, params }
  }

  return {
    name: props.paginatedRouteName,
    params: {
      ...params,
      page: String(page)
    }
  }
}
</script>

<style scoped>
.router-link-active {
  background-color: var(--color-gray-950);
  color: var(--color-white);
}
</style>
