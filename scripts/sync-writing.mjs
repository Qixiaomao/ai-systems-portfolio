import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const root = process.cwd();
const configPath = path.join(root, ".local", "writing-source.json");
const sourceDir =
  process.env.WRITING_SOURCE_DIR ||
  (fs.existsSync(configPath)
    ? JSON.parse(fs.readFileSync(configPath, "utf8")).sourceDir
    : "");

if (!sourceDir || !fs.existsSync(sourceDir)) {
  throw new Error(
    "Set WRITING_SOURCE_DIR or .local/writing-source.json to a local writing directory.",
  );
}

const publicDir = path.join(root, "content", "writing");
const assetRoot = path.join(root, "public", "content");
const slugPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const allowedMetadata = [
  "title",
  "slug",
  "created",
  "updated",
  "summary",
  "tags",
  "lang",
];
const staged = [];
const slugs = new Set();

for (const filename of fs
  .readdirSync(sourceDir)
  .filter((name) => name.endsWith(".md"))) {
  const sourcePath = path.join(sourceDir, filename);
  if (!fs.statSync(sourcePath).isFile()) continue;
  const { data, content } = matter(fs.readFileSync(sourcePath, "utf8"));
  if (data.publish !== true || !["ready", "synced"].includes(data.status)) continue;
  if (!slugPattern.test(data.slug) || slugs.has(data.slug)) {
    throw new Error(`Invalid or duplicate slug in ${filename}`);
  }
  slugs.add(data.slug);
  if (
    data.lang !== "en" ||
    !data.title ||
    !data.summary ||
    !/^\d{4}-\d{2}-\d{2}$/.test(data.created)
  ) {
    throw new Error(`Missing public English metadata in ${filename}`);
  }
  const marker = "<!-- PUBLIC_END -->";
  if (!content.includes(marker))
    throw new Error(`Missing private boundary marker in ${filename}`);
  let body = content.slice(0, content.indexOf(marker)).trim();
  if (/\[\[|source_zh|Internal notes|(?:[A-Za-z]:\\)|\.\.\//i.test(body)) {
    throw new Error(`Private link or local path found in ${filename}`);
  }
  const assets = [];
  body = body.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, (whole, alt, relative) => {
    if (!/^assets\/[a-z0-9/_-]+\.(?:png|jpe?g|webp|svg)$/i.test(relative)) {
      throw new Error(`Unsafe image reference in ${filename}: ${relative}`);
    }
    const input = fs.realpathSync(path.resolve(sourceDir, relative));
    const sourceRoot = fs.realpathSync(sourceDir) + path.sep;
    if (!input.startsWith(sourceRoot) || !fs.existsSync(input)) {
      throw new Error(`Missing or outside image in ${filename}: ${relative}`);
    }
    const outputName = path.basename(relative);
    if (assets.some((asset) => asset.outputName === outputName))
      throw new Error(`Duplicate asset name in ${filename}`);
    assets.push({ input, outputName });
    return `![${alt}](/content/${data.slug}/${outputName})`;
  });
  if (/!\[[^\]]*\]\((?!\/content\/)/.test(body))
    throw new Error(`Unapproved image in ${filename}`);
  const metadata = Object.fromEntries(
    allowedMetadata
      .filter((key) => data[key] !== undefined)
      .map((key) => [key, data[key]]),
  );
  staged.push({
    slug: data.slug,
    markdown: matter.stringify(body + "\n", metadata),
    assets,
  });
}

if (staged.length === 0)
  throw new Error("No approved articles found; nothing was changed.");
fs.mkdirSync(publicDir, { recursive: true });
fs.mkdirSync(assetRoot, { recursive: true });
for (const article of staged) {
  fs.writeFileSync(
    path.join(publicDir, `${article.slug}.md`),
    article.markdown,
  );
  const outputDir = path.join(assetRoot, article.slug);
  fs.mkdirSync(outputDir, { recursive: true });
  for (const asset of article.assets)
    fs.copyFileSync(asset.input, path.join(outputDir, asset.outputName));
  console.log(
    `Synced ${article.slug} (${article.assets.length} image${article.assets.length === 1 ? "" : "s"})`,
  );
}
