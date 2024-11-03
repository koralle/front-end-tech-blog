import { defineConfig } from 'astro/config'

import mdx from '@astrojs/mdx'

import react from '@astrojs/react'

import icon from 'astro-icon'

import {
  transformerMetaHighlight,
  transformerNotationDiff,
  transformerNotationErrorLevel,
  transformerNotationFocus,
  transformerNotationHighlight
} from '@shikijs/transformers'
import { rehypeAccessibleEmojis } from 'rehype-accessible-emojis'

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

  markdown: {
    rehypePlugins: [
      // @ts-ignore
      rehypeAccessibleEmojis
    ],
    shikiConfig: {
      themes: {
        light: 'catppuccin-frappe',
        dark: 'catppuccin-mocha'
      },
      transformers: [
        transformerNotationDiff(),
        transformerNotationHighlight(),
        transformerNotationErrorLevel(),
        transformerMetaHighlight(),
        transformerNotationFocus()
      ]
    }
  }
})
