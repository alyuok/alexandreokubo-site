import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Resposta direta de 1 a 2 frases, exibida no topo (formato AEO).
    answer: z.string(),
    pubDate: z.coerce.date(),
    reviewedDate: z.coerce.date(),
    category: z.string(),
    about: z.array(z.string()).default([]),
    sources: z.array(z.object({ label: z.string(), url: z.string().url() })).default([]),
    // Só posts aprovados pelo médico vão para o build de produção.
    status: z.enum(['rascunho', 'aprovado']).default('rascunho'),
  }),
});

export const collections = { blog };
