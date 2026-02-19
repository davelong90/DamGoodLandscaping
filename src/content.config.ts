import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    location: z.string(),
    date: z.coerce.date(),
    featured: z.boolean().default(false),
    services: z.array(z.string()),
    thumbnail: z.string(),
    beforeImages: z.array(z.string()),
    afterImages: z.array(z.string()),
    excerpt: z.string().optional(),
  }),
});

export const collections = { projects };
