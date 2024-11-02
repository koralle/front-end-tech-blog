import { defineConfig } from 'astro/config'

import mdx from '@astrojs/mdx'

import react from '@astrojs/react'

// https://astro.build/config
export default defineConfig({
  output: 'static',

  prefetch: true,

  vite: {
    build: {
      rollupOptions: {}
    }
  },

  integrations: [mdx(), react()],

  markdown: {
    shikiConfig: {
      themes: {
        light: 'catppuccin-frappe',
        dark: 'catppuccin-mocha'
      }
    }
  }
})
