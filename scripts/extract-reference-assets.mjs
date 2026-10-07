import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import { resolve } from "node:path";

// Extract only illustration regions. All page text, cards and controls remain HTML.
const source = resolve("设计图.png");
const destination = resolve("public/pixel");
await mkdir(destination, { recursive: true });

const regions = {
  "lucas-logo": { left: 50, top: 13, width: 144, height: 54 },
  "hero-workspace": { left: 724, top: 95, width: 490, height: 454 },
  "cat-read": { left: 86, top: 676, width: 85, height: 69 },
  "cat-laptop": { left: 470, top: 678, width: 91, height: 67 },
  "cat-sleep": { left: 849, top: 692, width: 102, height: 53 },
  "cat-sit": { left: 1000, top: 1058, width: 144, height: 94 },
};

for (const [name, region] of Object.entries(regions)) {
  const { data, info } = await sharp(source)
    .extract(region)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });
  const { width, height } = info;
  const seen = new Uint8Array(width * height);
  const queue = new Int32Array(width * height);
  let head = 0;
  let tail = 0;

  function enqueue(x, y) {
    if (x < 0 || y < 0 || x >= width || y >= height) return;
    const index = y * width + x;
    if (seen[index]) return;
    seen[index] = 1;
    const offset = index * 4;
    const r = data[offset];
    const g = data[offset + 1];
    const b = data[offset + 2];
    // Remove the connected paper background, preserving enclosed white cat fur.
    if (Math.min(r, g, b) < 235 || Math.max(r, g, b) - Math.min(r, g, b) > 22)
      return;
    data[offset + 3] = 0;
    queue[tail++] = index;
  }

  for (let x = 0; x < width; x++) {
    enqueue(x, 0);
    enqueue(x, height - 1);
  }
  for (let y = 0; y < height; y++) {
    enqueue(0, y);
    enqueue(width - 1, y);
  }
  while (head < tail) {
    const index = queue[head++];
    const x = index % width;
    const y = Math.floor(index / width);
    enqueue(x - 1, y);
    enqueue(x + 1, y);
    enqueue(x, y - 1);
    enqueue(x, y + 1);
  }

  if (name === "cat-sit") {
    // Exclude the nearby handwritten annotation from this sprite's crop.
    for (let y = 0; y < 22; y++) {
      for (let x = 94; x < width; x++) data[(y * width + x) * 4 + 3] = 0;
    }
  }

  await sharp(data, { raw: { width, height, channels: 4 } })
    .png()
    .toFile(resolve(destination, `${name}.png`));
  console.log(`${name}.png (${width} × ${height})`);
}
