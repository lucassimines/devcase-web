<template>
  <div
    class="bg-body fixed top-0 left-0 z-100 flex size-full flex-col transition-all duration-500 sm:hidden"
    :class="navigationState ? 'max-h-full' : 'invisible max-h-0'"
  >
    <nav
      v-if="bootstrap?.menu?.links?.length"
      class="flex flex-1 flex-col overflow-x-hidden overflow-y-auto"
    >
      <div class="flex flex-1 flex-col items-center justify-center gap-12 p-10">
        <ul class="flex flex-col items-center gap-8">
          <li
            v-for="(link, index) in bootstrap.menu.links"
            :key="link.id"
            class="text-center text-3xl transition-all duration-300"
            :class="{ '-translate-y-2 opacity-0': !navigationState }"
            :style="{
              transitionDelay: navigationState
                ? `${navigationState ? 300 + 50 * (index + 1) : 0}ms`
                : ''
            }"
          >
            <NuxtLink
              :to="`/${link.slug}`"
              class="text-xl transition-colors after:mt-1 after:block after:h-px after:w-0 after:bg-gray-50 after:transition-[width] after:content-[''] hover:after:w-full"
              :class="{
                'after:w-full':
                  (link.slug && route.path.startsWith(`/${link.slug}`)) ||
                  (!link.slug && route.path === '/')
              }"
              @click="closeNavigation()"
            >
              {{ link.name }}
            </NuxtLink>
          </li>

          <li
            class="flex flex-wrap justify-center gap-4 text-3xl transition-all duration-300"
            :class="{ '-translate-y-2 opacity-0': !navigationState }"
            :style="{
              transitionDelay: navigationState
                ? `${navigationState ? 300 + 50 * (bootstrap.menu.links.length + 1) : 0}ms`
                : ''
            }"
          >
            <NuxtLink
              v-for="socialMedia in socialMedias"
              :key="socialMedia.name"
              :to="socialMedia.url"
              target="_blank"
              class="text-3xl"
              ><Icon :name="socialMedia.icon"
            /></NuxtLink>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts">
const { bootstrap, socialMedias, navigationState, closeNavigation } = useBootstrap()

const route = useRoute()
</script>
