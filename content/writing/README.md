# Public writing

Only reviewed English articles belong here. The site reads this directory at build time. Do not copy the Obsidian vault, Chinese source drafts, raw notes, or wiki pages into the repository.

For a new article, add `status: ready`, `publish: true`, `slug: lower-case-slug`, `lang: en`, `created: YYYY-MM-DD`, `title`, and `summary` to its frontmatter. Put `<!-- PUBLIC_END -->` before any private notes. The sync script exports only approved fields and text above that marker, plus images directly referenced under `assets/`. After pushing, `status: synced` keeps the article eligible for future updates.

On your own computer, set `WRITING_SOURCE_DIR` to the Obsidian `writing` folder, or put `{"sourceDir":"D:\\path\\to\\writing"}` in the ignored `.local/writing-source.json`. Run `npm run content:sync`, review `git diff` and `git status`, then run `npm run test:content` and `npm run check` before committing. To withdraw an article, remove its exported Markdown and image folder from this repository as well as its approval flag in Obsidian.
