import { defineCollection, z } from "astro:content";
import { glob } from 'astro/loaders';
const postCollection = defineCollection({
    // type: "content",
    loader: glob({ pattern: "**/*.md", base: "./src/content/post" }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        dateFormatted: z.string(),
        pubDate: z.coerce.date(),
        updatedDate: z.coerce.date().optional(),
    }),
});

export const collections = {
    post: postCollection,
};
