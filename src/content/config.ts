// 1. Import utilities from `astro:content`
import { defineCollection, z } from "astro:content";
// 2. Define your collection(s)
const blogCollection = defineCollection({
  type: "content",
  schema: ({}) =>
    z.object({
      title: z.string(),
      pubDate: z.date(),

      description: z.string(),
      tags: z.array(z.string()).default(["otros"]),
    }),
});
// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  'blog': blogCollection,
};
