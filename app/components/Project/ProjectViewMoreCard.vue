<template>
  <div
    class="@container relative flex aspect-square flex-col justify-center overflow-hidden rounded-2xl border border-white/10 @2xl:aspect-10/7 @4xl:aspect-video @5xl:aspect-12/6"
  >
    <Pattern />

    <div class="2lg:p-14 relative z-2 flex flex-col items-start gap-10 p-10">
      <h1 class="2lg:text-4xl text-3xl leading-tight" v-text="$t('projects.viewMore.title')" />

      <Button :to="{ name: 'projects' }" :text="$t('projects.viewAll')" color="white" />
    </div>
  </div>
</template>
