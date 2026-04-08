import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  modules: ['@nuxt/image', '@nuxt/eslint', '@nuxtjs/mdc', '@nuxtjs/i18n'],

  devtools: { enabled: true },

  css: ['./app/assets/css/main.css', './app/assets/css/font.css'],

  mdc: {
    headings: {
      anchorLinks: {
        h1: false,
        h2: false,
        h3: false,
        h4: false,
        h5: false,
        h6: false
      }
    }
  },

  runtimeConfig: {
    public: {
      appUrl: import.meta.env.APP_URL
    }
  },

  compatibilityDate: '2026-04-02',

  vite: {
    plugins: [tailwindcss()]
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },

  i18n: {
    strategy: 'no_prefix',
    defaultLocale: 'pt-BR',
    experimental: {
      typedOptionsAndMessages: 'all'
    },
    locales: [
      {
        code: 'pt-BR',
        file: 'pt-br.json'
      }
    ]
  },

  image: {
    domains: [import.meta.env.NUXT_IMAGES_DOMAIN || ''],
    presets: {
      avatar: {
        modifiers: {
          format: 'webp',
          width: 300
        }
      }
    }
  }
})
