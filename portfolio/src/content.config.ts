import { defineCollection, z } from 'astro:content';
import { file } from 'astro/loaders';

/**
 * Content collections give the portfolio type-safe, schema-validated data.
 * To add a new job or project, append an entry to the JSON file —
 * no component changes required.
 */

const experience = defineCollection({
  loader: file('src/data/experience.json'),
  schema: z.object({
    order: z.number(),
    company: z.string(),
    role: z.string(),
    mode: z.enum(['Remote', 'On-site', 'Hybrid']),
    start: z.string(),
    end: z.string(),
    sector: z.string(),
    bullets: z.array(z.string()).min(1),
    stack: z.array(z.string()),
  }),
});

const projects = defineCollection({
  loader: file('src/data/projects.json'),
  schema: z.object({
    order: z.number(),
    name: z.string(),
    role: z.string(),
    description: z.string(),
    highlights: z.array(z.string()).min(1),
    stack: z.array(z.string()),
    /** Optional repo or live URL. */
    link: z.string().url().optional(),
  }),
});

export const collections = { experience, projects };
