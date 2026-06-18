import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const postsCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/posts" }),
  schema: z.object({
    title: z.string(),
    x: z.number(),
    y: z.number(),
    cols: z.number().default(6),
    rows: z.number().default(4),
    excerpt: z.string().optional(),
    date: z.coerce.date(), // 使用 z.coerce.date() 自动处理字符串转日期
  }),
});

const toolsCollection = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/content/tools" }),
  schema: z.object({
    label: z.string(),
    widgetType: z.enum(["pid", "attitude", "caliper", "calculator"]), // 预定义工具类型
    x: z.number(),
    y: z.number(),
    cols: z.number().default(3),
    rows: z.number().default(3),
  }),
});

export const collections = {
  'posts': postsCollection,
  'tools': toolsCollection, 
};