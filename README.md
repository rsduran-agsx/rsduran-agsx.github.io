# rein.duran — portfolio

> Personal portfolio for **Rein Duran**, Cloud / DevOps Engineer (AWS).
> **Live:** https://rsduran-agsx.github.io

A dark *"control plane"* single-page site that turns invisible infrastructure work — multi-account landing zones, FinOps wins, EKS→Fargate migrations — into something you can actually see: hand-built architecture diagrams, animated metric stat-cards, and a multi-region globe.

## Selected highlights
- **−26% AWS spend** ($36.5k → $27k/mo) across a 13-account estate
- First **Well-Architected multi-account landing zone** (AFT + hub-and-spoke), **100% IaC**
- **EKS → ECS Fargate** migration — 0 nodes left to patch
- Production infra for an AI engine: 10+ AWS services (Bedrock, API Gateway, Lambda, Step Functions, …)

## Stack
| Layer | Tech |
|---|---|
| Framework | Vite + React 18 + TypeScript |
| Styling | Tailwind CSS v4 (CSS-first `@theme`) |
| Motion | Motion (`motion/react`) |
| 3D globe | react-globe.gl + three (code-split) |
| Fonts | self-hosted Sora · Inter · JetBrains Mono |
| Hosting | GitHub Pages via GitHub Actions |

## Develop

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # → dist/
npm run preview
npm run typecheck
```

## Structure

```
src/
  data/content.ts          # all copy — single source of truth
  components/sections/*     # Hero, About, Stack, Experience, CaseStudies, Credentials, Contact
  components/visuals/*      # globe (react-globe.gl) + hand-built SVG architecture diagrams
  components/primitives/*   # Reveal, Section, StatCard, Terminal, Chip, Socials
CLAUDE.md                   # design system + conventions
```

Deploys automatically on push to `main` (see `.github/workflows/deploy.yml`).

---

<sub>Designed + built with React and Claude Code.</sub>
