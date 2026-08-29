import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const questsSchema = z.object({
	name: z.string(),
	status: z.enum(['unclaimed', 'completed']),
	order: z.number(),
	repo: z.url().optional(),
	site: z.url().optional(),
});

const quests = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/quests' }),
	schema: questsSchema,
});

export const collections = { quests };