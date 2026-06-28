# Rein Duran — Portfolio (project context)

Personal job-portfolio for **Rein Duran**, mid-level **Cloud / DevOps Engineer** (AWS).
Single-page, anchor-nav, static site. Built with Claude Code.

## Owner facts — SOURCE OF TRUTH (keep accurate; never fabricate)
- Name: **Rein Duran**. Role: Cloud DevOps Engineer @ **NMBLR AI** (formerly Talino Labs / Amihan Global Strategies), Oct 2024–present. Manila / Pasig, PH.
- Public contact: `reineirsamonteduran@gmail.com` · `linkedin.com/in/rein-duran` · `github.com/rsduran-agsx`
- Education: BS Electronics Engineering, PUP Manila (2019–2023). **ECE Licensure Exam — Rank 3 nationally** (90.70%, 3rd of 3,130). PRC publicly publishes topnotchers → verifiable, feature it boldly.
- Cert: **AWS Certified Cloud Practitioner** (2024–2027).
- Skills: AWS (EC2, ECS/Fargate, EKS, Lambda, RDS/Aurora, S3, VPC, ALB, Route 53, IAM, CloudWatch, Bedrock, API Gateway, EFS, Step Functions, WAF), Terraform, AFT; Docker, Kubernetes, Helm; GitHub Actions, GitLab CI, ArgoCD; Python (Boto3), Bash, SQL.
- Headline metrics: **−26% AWS spend** ($36.5k→$27k) · **13** AWS accounts · **7** EKS clusters migrated · **100%** IaC · **15** microservices · **6** ventures · **10+** AWS services.

## Stack
Vite + React 18 + TypeScript · Tailwind CSS v4 (CSS-first `@theme`) · Motion (`motion/react`) · Cobe (globe) · custom hooks (typewriter / count-up / scroll-spy) · lucide-react + react-icons (brand logos) · @fontsource-variable fonts.
Deploy: GitHub Pages **user site** `rsduran-agsx.github.io` via GitHub Actions.

## Design system — "Control Plane" (dark operator console)
Calm, dark, infrastructural. Abundant negative space. ONE teal accent for "signal." Restrained — spend boldness only on the hero motif + metrics + diagrams.

**Colors** (Tailwind tokens): ground `#0B1118`, surface `#121A24`, raised `#1A2632`, hairline `#243340`, ink `#E6EDF3`, muted `#8A9BAD`, accent `#34E0C4`, accent-deep `#0FB5A0`; diagram-only: subnet-green `#3FB950`, subnet-blue `#2F81F7`, amber `#E3B341`.
Use `bg-ground text-ink`, `text-accent`, `border-hairline`, `bg-surface`, `font-display|sans|mono`, helper classes `eyebrow` / `grid-bg` / `tnum`.

**Type:** Sora (display/headings/big numbers) · Inter (body) · JetBrains Mono (eyebrows, labels, code, nav, chips). Mono eyebrows UPPERCASE +0.14em. `text-wrap: balance` on headings. Body ~65ch. `tabular-nums` on every metric.

**Spacing:** section padding ~120–160px desktop; content max-w ~1100–1200px; cards = `bg-surface` + 1px `border-hairline` (not heavy shadows); radius 6–8px.

**DO:** grouped skill chips (NO progress bars / % rings), metric stat-cards w/ count-up, hand-built SVG architecture diagrams (subnet color code: public=green, private=blue), Problem→Action→Impact case studies, mono section labels, scroll-synced active nav.
**DON'T:** progress bars, generic three-card hero, purple/blue gradients, cream/serif/terracotta, AWS-orange everywhere, scroll-jacking, fabricated claims/certs.

**Motion** (ALL behind `prefers-reduced-motion`; content must survive with JS/motion off): hero terminal typing, Cobe globe (slow, low-opacity, behind text), metric count-up on inView, diagram stroke-draw reveal, short fade-up section reveals (~16px / 400ms), nav active highlight, subtle hover glows. No parallax-heavy effects / scroll-jacking.

## Sections (order)
Hero (eyebrow · headline · value prop · CTAs · globe · stat strip) → About → Stack → Experience → Case Studies (×4 + "Selected Work" row) → Credentials (AWS cert + Rank 3 flagship) → Contact → Footer.

## Conventions
- Run dev/build via `npm --prefix <dir> …`; avoid `cd` (permission-prompt risk in this env).
- Personal git identity ONLY: `user.name = rsduran-agsx`, `user.email = rsduran-agsx@users.noreply.github.com`. Never the work account `rduran-agsx`.
- **Privacy:** do NOT publish references' phone numbers; the personal mobile number is omitted from the public site by default (email + LinkedIn + GitHub are the contact channels).
