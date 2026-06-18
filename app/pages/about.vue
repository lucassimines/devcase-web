<template>
  <Loader v-if="status === 'pending'" />

  <div v-else-if="page" class="py-section">
    <Container :ui="{ inner: 'flex max-xs:flex-col xs:items-center gap-6' }">
      <figure class="size-28 flex-none overflow-hidden rounded-full bg-white/10 sm:size-40">
        <NuxtImg
          src="/images/avatar.jpg"
          :alt="profile.name"
          class="size-full object-cover"
          preset="avatar"
        />
      </figure>

      <div class="space-y-3">
        <div class="space-y-2">
          <div>
            <h1 class="text-3xl" v-text="profile.name" />
            <h2 class="text-elevated text-lg" v-text="profile.title" />
          </div>

          <div>
            <p class="text-elevated italic" v-text="profile.location" />
          </div>
        </div>

        <div class="flex flex-wrap items-center gap-4">
          <ButtonSocialMedia
            v-for="socialMedia in socialMedias"
            :key="socialMedia.name"
            :ui="{ base: 'text-elevated text-xl' }"
            :social-media="socialMedia"
          />
        </div>
      </div>
    </Container>

    <Blocks :blocks="page?.blocks" />
  </div>
</template>

<script setup lang="ts">
const { data: page, status, error } = usePageFetch('about')

useSeoMeta({
  title: 'About',
  description: 'Learn more about Lucas Simines, background, and work approach.'
})

const { profile } = useBootstrap()

const { socialMedias } = useBootstrap()

if (error.value) {
  throw createError({
    statusCode: error.value.status
  })
}
</script>
