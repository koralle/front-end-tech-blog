import { defineConfig } from 'astro/config'

import mdx from '@astrojs/mdx'

import react from '@astrojs/react'

import icon from 'astro-icon'

// https://astro.build/config
export default defineConfig({
  output: 'static',

  prefetch: true,

  vite: {
    build: {
      rollupOptions: {}
    }
  },

  integrations: [mdx(), react(), icon()],

  i18n: {
    defaultLocale: 'ja',
    locales: ['ja'],
    routing: {
      prefixDefaultLocale: true
    }
  },

  markdown: {
    shikiConfig: {
      themes: {
        light: 'catppuccin-frappe',
        dark: 'catppuccin-mocha'
      }
    }
  }
})
