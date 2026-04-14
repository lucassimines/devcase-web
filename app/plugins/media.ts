export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      imageUrl: (filename: string | null | undefined) => {
        if (!filename) return ''
        return `${nuxtApp.$config.public.imagesUrl}/${filename}`
      }
    }
  }
})
