<template>
  <ButtonMenu />

  <MobileNavigation />

  <AppHeader />

  <div class="flex flex-1 flex-col">
    <div class="grow">
      <slot />
    </div>
  </div>

  <AppFooter />
</template>
