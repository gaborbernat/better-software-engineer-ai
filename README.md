# Better Software Engineer in the World of AI Agents

Slidev deck for the talk "How to be a Better Software Engineer in the World of AI Agents" (PyBay 2026). It separates the
work AI coding agents help with from the work that still needs human judgment, and covers how to bring a team along.

## Quick start

```bash
npm install
npm run dev
```

Open http://localhost:3030.

## Scripts

```bash
npm run dev              # live-reload dev server
npm run build            # static SPA into dist/
npm run export           # PDF via playwright-chromium
npm run deploy           # publish to GitHub Pages
```

Published at <https://gaborbernat.github.io/better-software-engineer-ai/>.

PDF: [light](pdf/better-software-engineer-ai-light.pdf) · [dark](pdf/better-software-engineer-ai-dark.pdf) ·
[A4 with speaker notes](pdf/better-software-engineer-ai-notes-a4.pdf).

## File map

| File                         | Section                                                             |
| ---------------------------- | ------------------------------------------------------------------- |
| `slides.md`                  | Headmatter, cover, resources, and closing                           |
| `talk-01-cost-moved.md`      | Act 1: lower production costs and the decisions they change         |
| `talk-02-bar-held.md`        | Act 2: trust, review capacity, quality, and security                |
| `talk-03-the-gap.md`         | Act 3: system design, business context, review, and edge cases      |
| `talk-04-working-the-gap.md` | Act 4: specification, tests, context, review, and model selection   |
| `talk-05-team-and-monday.md` | Act 5: team adoption, shared standards, guardrails, and first steps |

Components live in `components/`; `slide-bottom.vue` is the footer; assets are in `public/`.
