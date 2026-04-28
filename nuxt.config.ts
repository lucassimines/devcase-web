import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  modules: ['@nuxt/image', '@nuxt/eslint', '@nuxtjs/mdc', '@nuxtjs/i18n', '@nuxt/icon'],

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
      apiUrl: import.meta.env.API_URL,
      appUrl: import.meta.env.APP_URL,
      imagesUrl: import.meta.env.NUXT_PUBLIC_IMAGES_URL
    }
  },

  compatibilityDate: '2026-04-02',

  vite: {
    plugins: [tailwindcss()]
  },

  typescript: {
    typeCheck: true
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
    defaultLocale: 'en-US',
    experimental: {
      typedOptionsAndMessages: 'all'
    },
    locales: [
      {
        code: 'en-US',
        file: 'en-us.json'
      }
    ]
  },

  icon: {
    provider: 'server',
    clientBundle: {
      scan: true
    }
  },

  image: {
    domains: [import.meta.env.NUXT_IMAGES_DOMAIN || ''],
    presets: {
      avatar: {
        modifiers: {
          width: 300
        }
      }
    }
  }
})
