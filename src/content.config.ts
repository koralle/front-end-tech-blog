import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

export const articleSchema = z
  .object({
    title: z.string(),
    category: z.string(),
    tags: z.array(z.string()),
    image: z
      .object({
        src: z.string(),
        alt: z.string()
      })
      .optional(),
    language: z.union([z.literal('ja'), z.literal('en')]).default('ja'),
    footnote: z.string().optional(),
    publishedDate: z.date(),
    lastUpdatedDate: z.date().optional()
  })
  .strict()

export type Article = z.infer<typeof articleSchema>

const articleCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/articles' }),
  schema: articleSchema
})

export const collections = {
  articles: articleCollection
}
