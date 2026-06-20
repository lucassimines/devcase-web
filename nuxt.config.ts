import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  modules: [
    '@nuxt/image',
    '@nuxt/eslint',
    '@nuxtjs/mdc',
    '@nuxtjs/i18n',
    '@nuxt/icon',
    'nuxt-gtag'
  ],

  devtools: { enabled: false },

  app: {
    head: {
      title: 'Lucas Simines',
      titleTemplate: '%s | Lucas Simines',
      htmlAttrs: {
        lang: 'en-US'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Full stack developer specializing in Nuxt, Vue, Laravel, and Node.js, building scalable web applications from concept to production.'
        },
        { name: 'theme-color', content: '#0f172a' }
      ]
    }
  },

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
    apiUrl: process.env.API_URL,
    public: {
      apiUrl: process.env.API_URL,
      appUrl: process.env.APP_URL,
      imagesUrl: process.env.NUXT_PUBLIC_IMAGES_URL
    }
  },

  routeRules: {
    '/**': { isr: process.env.NODE_ENV === 'production' ? 300 : false },
    '/sitemap.xml': { isr: false },
    '/sitemap/*': { isr: false },
    '/robots.txt': { isr: false }
  },

  compatibilityDate: '2026-04-02',

  // Required for on-demand ISR: Vercel only honors `x-prerender-revalidate` when this is set at build time.
  nitro: {
    vercel: {
      config: {
        bypassToken: process.env.PRERENDER_REVALIDATE_TOKEN
      }
    }
  },

  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      include: ['tailwind-variants']
    }
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

  gtag: {
    enabled: process.env.NODE_ENV === 'production',
    id: process.env.GTAG_ID
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
    domains: [process.env.NUXT_IMAGES_DOMAIN || ''],
    presets: {
      md: {
        modifiers: {
          width: 800
        }
      },
      lg: {
        modifiers: {
          width: 1200
        }
      },
      lg2: {
        modifiers: {
          width: 1600
        }
      },
      avatar: {
        modifiers: {
          width: 300
        }
      }
    }
  }
})
