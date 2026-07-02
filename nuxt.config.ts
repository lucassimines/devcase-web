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
      meta: [{ name: 'author', content: 'Lucas Simines' }],
      link: [
        { rel: 'icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', href: '/images/avatar.jpg' }
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
    '/**': {
      isr: false
    },
    // '/sitemap.xml': {
    //   isr: false
    // },
    // '/sitemap/*': {
    //   isr: false
    // },
    // '/robots.txt': {
    //   isr: false
    // },
    // '/articles': {
    //   isr: false
    // },
    // '/articles/*': {
    //   isr: false
    // },
    '/projects/project/**': {
      redirect: {
        to: '/projects/**',
        statusCode: 301
      }
    }
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
    defaultLocale: 'pt-BR',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'locale',
      fallbackLocale: 'pt-BR',
      alwaysRedirect: false
    },
    experimental: {
      typedOptionsAndMessages: 'all'
    },
    locales: [
      {
        code: 'en-US',
        language: 'en-US',
        file: 'en-us.json'
      },
      {
        code: 'pt-BR',
        language: 'pt-BR',
        file: 'pt-br.json'
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
