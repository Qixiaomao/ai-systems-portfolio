import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type WritingPost = {
  slug: string;
  title: string;
  summary: string;
  date: string;
  updated?: string;
  tags: string[];
  body: string;
};

const directory = path.join(process.cwd(), "content", "writing");
const safeSlug = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

export function getWritingPost(slug: string): WritingPost | null {
  if (!safeSlug.test(slug)) return null;
  const file = path.join(directory, `${slug}.md`);
  if (!fs.existsSync(file)) return null;
  const { data, content } = matter(fs.readFileSync(file, "utf8"));
  if (data.slug !== slug || data.lang !== "en")
    throw new Error(`Invalid writing metadata: ${slug}`);
  return {
    slug,
    title: String(data.title),
    summary: String(data.summary),
    date: String(data.created),
    updated: data.updated ? String(data.updated) : undefined,
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
    body: content,
  };
}

export function getWritingPosts(): WritingPost[] {
  if (!fs.existsSync(directory)) return [];
  return fs
    .readdirSync(directory)
    .filter((file) => file.endsWith(".md"))
    .map((file) => getWritingPost(file.slice(0, -3)))
    .filter((post): post is WritingPost => post !== null)
    .sort((a, b) => b.date.localeCompare(a.date));
}
