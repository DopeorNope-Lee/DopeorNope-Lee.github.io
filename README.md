# Seungyoo Lee (DopeorNope) — Personal Website

Source for <https://dopeornope-lee.github.io/>, built with [Hugo](https://gohugo.io/) and the [Hugo Blox](https://hugoblox.com/) Academic CV template. Pushing to `main` deploys to GitHub Pages via `.github/workflows/publish.yaml`.

## Where things live

| What | File |
|---|---|
| Home page (bio, news, research, selected papers) | `content/_index.md` |
| Profile, education, work, awards, skills | `content/authors/admin/_index.md` |
| Navigation menu | `config/_default/menus.yaml` |
| Publications (one folder per paper) | `content/publication/<slug>/index.md` |
| Projects | `content/project/<slug>/index.md` |
| Teaching | `content/teaching/<slug>/index.md` |
| CV PDF | `static/uploads/resume.pdf` |

## Common updates

- **News**: add a line at the top of the `news` block in `content/_index.md`.
- **New paper**: copy an existing folder in `content/publication/`, edit `index.md`. Set `featured: true` to show it on the home page. Optionally add `cite.bib` and `featured.jpg` in the same folder.
- **Local preview**: `hugo server` (Hugo extended 0.126.3 + Go required).
