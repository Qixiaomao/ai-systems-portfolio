import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { spawnSync } from "node:child_process";
import test from "node:test";

const script = path.join(import.meta.dirname, "sync-writing.mjs");

function fixture(article) {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "writing-sync-"));
  const source = path.join(root, "private-vault");
  fs.mkdirSync(source);
  fs.writeFileSync(path.join(source, "article.md"), article);
  const result = spawnSync(process.execPath, [script], {
    cwd: root,
    env: { ...process.env, WRITING_SOURCE_DIR: source },
    encoding: "utf8",
  });
  return { root, result };
}

const frontmatter = `---
title: A public note
slug: public-note
created: '2026-10-07'
summary: A short description.
lang: en
status: ready
publish: true
source_zh: private-source.md
---
`;

test("exports only the public body and whitelisted metadata", (t) => {
  const { root, result } = fixture(
    `${frontmatter}\n# A public note\n\nPublic thought.\n\n<!-- PUBLIC_END -->\n\nInternal notes: [[wiki/private]]\n`,
  );
  t.after(() => fs.rmSync(root, { recursive: true, force: true }));
  assert.equal(result.status, 0, result.stderr);
  const output = fs.readFileSync(
    path.join(root, "content", "writing", "public-note.md"),
    "utf8",
  );
  assert.match(output, /Public thought/);
  assert.doesNotMatch(
    output,
    /source_zh|Internal notes|wiki\/private|PUBLIC_END/,
  );
});

test("refuses private links before writing public files", (t) => {
  const { root, result } = fixture(
    `${frontmatter}\n# A public note\n\n[[wiki/private]]\n\n<!-- PUBLIC_END -->\n`,
  );
  t.after(() => fs.rmSync(root, { recursive: true, force: true }));
  assert.notEqual(result.status, 0);
  assert.equal(fs.existsSync(path.join(root, "content")), false);
});

test("does not export an unapproved draft", (t) => {
  const { root, result } = fixture(
    `${frontmatter.replace("status: ready", "status: draft")}\n# A public note\n\n<!-- PUBLIC_END -->\n`,
  );
  t.after(() => fs.rmSync(root, { recursive: true, force: true }));
  assert.notEqual(result.status, 0);
  assert.equal(fs.existsSync(path.join(root, "content")), false);
});
