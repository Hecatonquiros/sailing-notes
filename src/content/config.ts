import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().optional(),
    lang: z.enum(["es", "en"]), // idioma del contenido
    relatedPost: z.string().optional() // slug del post relacionado en otro idioma
  }),
});

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().optional(),
    demoURL: z.string().optional(),
    repoURL: z.string().optional(),
    lang: z.enum(["es", "en"]), // idioma del contenido
    relatedProject: z.string().optional() // slug del proyecto relacionado en otro idioma
  }),
});

export const collections = { blog, projects };
