import { cn } from '@/lib/cn'

/* ── shared SVG primitives ─────────────────────────────────── */

function Node({
  x,
  y,
  w,
  h,
  label,
  sub,
  accent,
  dim,
}: {
  x: number
  y: number
  w: number
  h: number
  label: string
  sub?: string
  accent?: boolean
  dim?: boolean
}) {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx={7}
        className={cn(
          '[stroke-width:1.5]',
          accent
            ? 'fill-accent/10 stroke-accent/70'
            : dim
              ? 'fill-surface/40 stroke-hairline'
              : 'fill-surface stroke-hairline',
        )}
      />
      <text
        x={x + w / 2}
        y={sub ? y + h / 2 - 6 : y + h / 2}
        textAnchor="middle"
        dominantBaseline="middle"
        className={cn('font-mono', accent ? 'fill-accent' : 'fill-ink')}
        style={{ fontSize: 10.5 }}
      >
        {label}
      </text>
      {sub && (
        <text
          x={x + w / 2}
          y={y + h / 2 + 9}
          textAnchor="middle"
          dominantBaseline="middle"
          className="fill-muted font-mono"
          style={{ fontSize: 7.5 }}
        >
          {sub}
        </text>
      )}
    </g>
  )
}

function Arrow({
  from,
  to,
  dir = 'right',
  accent,
}: {
  from: [number, number]
  to: [number, number]
  dir?: 'right' | 'down'
  accent?: boolean
}) {
  const [x1, y1] = from
  const [x2, y2] = to
  const head =
    dir === 'right'
      ? `M ${x2} ${y2} l -6 -4 l 0 8 z`
      : `M ${x2} ${y2} l -4 -6 l 8 0 z`
  return (
    <g>
      <line
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        className={cn(
          '[stroke-width:1.5]',
          accent ? 'stroke-accent/70' : 'stroke-hairline',
        )}
      />
      <path d={head} className={accent ? 'fill-accent/70' : 'fill-muted/70'} />
    </g>
  )
}

function Caption({
  x,
  y,
  children,
  tone = 'muted',
  size = 9,
  anchor = 'middle',
}: {
  x: number
  y: number
  children: string
  tone?: 'muted' | 'accent' | 'amber' | 'ink'
  size?: number
  anchor?: 'middle' | 'start' | 'end'
}) {
  const fill =
    tone === 'accent'
      ? 'fill-accent'
      : tone === 'amber'
        ? 'fill-amber'
        : tone === 'ink'
          ? 'fill-ink'
          : 'fill-muted'
  return (
    <text
      x={x}
      y={y}
      textAnchor={anchor}
      className={cn('font-mono uppercase tracking-wider', fill)}
      style={{ fontSize: size }}
    >
      {children}
    </text>
  )
}

/* ── 1 · cost: before / after ──────────────────────────────── */

function CostDiagram() {
  const base = 205
  return (
    <svg viewBox="0 0 460 250" className="h-auto w-full" role="img" aria-label="AWS monthly spend dropped from $36.5k to $27k, a 26% reduction.">
      <line x1={64} y1={base} x2={400} y2={base} className="stroke-hairline [stroke-width:1.5]" />
      {/* before */}
      <rect x={130} y={base - 150} width={64} height={150} rx={4} className="fill-amber/15 stroke-amber/50 [stroke-width:1.5]" />
      <Caption x={162} y={base - 162} tone="ink" size={13}>$36.5k</Caption>
      <Caption x={162} y={base + 18}>before</Caption>
      {/* after */}
      <rect x={266} y={base - 111} width={64} height={111} rx={4} className="fill-accent/20 stroke-accent [stroke-width:1.5]" />
      <Caption x={298} y={base - 123} tone="accent" size={13}>$27k</Caption>
      <Caption x={298} y={base + 18}>after</Caption>
      {/* delta */}
      <line x1={194} y1={base - 150} x2={266} y2={base - 111} className="stroke-muted/40 [stroke-width:1.5] [stroke-dasharray:3_3]" />
      <rect x={196} y={28} width={68} height={26} rx={13} className="fill-accent/15 stroke-accent/60 [stroke-width:1.5]" />
      <text x={230} y={41.5} textAnchor="middle" dominantBaseline="middle" className="fill-accent font-mono" style={{ fontSize: 13, fontWeight: 600 }}>−26%</text>
    </svg>
  )
}

/* ── 2 · hub-and-spoke landing zone ────────────────────────── */

function HubSpokeDiagram() {
  const hub: [number, number] = [230, 152]
  const spokes: { c: [number, number]; label: string }[] = [
    { c: [82, 54], label: 'Prod' },
    { c: [378, 54], label: 'Sandbox' },
    { c: [60, 152], label: 'Shared Svcs' },
    { c: [400, 152], label: 'Audit' },
    { c: [230, 258], label: 'Log Archive' },
  ]
  return (
    <svg viewBox="0 0 460 300" className="h-auto w-full" role="img" aria-label="A hub-and-spoke AWS landing zone: a central network hub connected to Prod, Sandbox, Shared Services, Audit, and Log Archive accounts.">
      {spokes.map((s, i) => (
        <line key={i} x1={hub[0]} y1={hub[1]} x2={s.c[0]} y2={s.c[1]} className="stroke-accent/30 [stroke-width:1.5]" />
      ))}
      {spokes.map((s, i) => (
        <Node key={i} x={s.c[0] - 48} y={s.c[1] - 20} w={96} h={40} label={s.label} sub="account" dim />
      ))}
      {/* hub on top */}
      <rect x={hub[0] - 66} y={hub[1] - 26} width={132} height={52} rx={9} className="fill-accent/10 stroke-accent [stroke-width:1.75]" />
      <text x={hub[0]} y={hub[1] - 4} textAnchor="middle" dominantBaseline="middle" className="fill-accent font-mono" style={{ fontSize: 11.5, fontWeight: 600 }}>NETWORK HUB</text>
      <text x={hub[0]} y={hub[1] + 11} textAnchor="middle" dominantBaseline="middle" className="fill-muted font-mono" style={{ fontSize: 7.5 }}>transit gateway · 100% IaC</text>
    </svg>
  )
}

/* ── 3 · EKS managed nodes → ECS Fargate ───────────────────── */

function FargateDiagram() {
  return (
    <svg viewBox="0 0 460 250" className="h-auto w-full" role="img" aria-label="Migration from EKS with managed nodes you must patch, to ECS Fargate with zero nodes to patch.">
      {/* left: EKS */}
      <rect x={18} y={44} width={184} height={150} rx={9} className="fill-surface/30 stroke-hairline [stroke-width:1.5] [stroke-dasharray:4_4]" />
      <Caption x={110} y={34} tone="amber">EKS · managed nodes</Caption>
      {[34, 90, 146].map((x) => (
        <Node key={x} x={x} y={74} w={44} h={34} label="node" dim />
      ))}
      <rect x={48} y={130} width={124} height={22} rx={11} className="fill-amber/15 stroke-amber/50 [stroke-width:1.25]" />
      <text x={110} y={141.5} textAnchor="middle" dominantBaseline="middle" className="fill-amber font-mono" style={{ fontSize: 8.5 }}>Extended Support · 6×</text>
      <Caption x={110} y={178} tone="muted" size={8}>you patch these</Caption>

      {/* arrow */}
      <Arrow from={[206, 119]} to={[256, 119]} accent />
      <Caption x={231} y={110} tone="accent" size={8}>migrate</Caption>

      {/* right: Fargate */}
      <rect x={260} y={44} width={184} height={150} rx={9} className="fill-accent/[0.06] stroke-accent/60 [stroke-width:1.5]" />
      <Caption x={352} y={34} tone="accent">ECS Fargate · serverless</Caption>
      {[284, 340, 396].map((x) => (
        <Node key={x} x={x} y={74} w={44} h={34} label="task" accent />
      ))}
      <rect x={290} y={130} width={124} height={22} rx={11} className="fill-accent/15 stroke-accent/50 [stroke-width:1.25]" />
      <text x={352} y={141.5} textAnchor="middle" dominantBaseline="middle" className="fill-accent font-mono" style={{ fontSize: 8.5 }}>0 nodes to patch</text>
      <Caption x={352} y={178} tone="muted" size={8}>fully managed</Caption>
    </svg>
  )
}

/* ── 4 · AI engine request flow ────────────────────────────── */

function AiFlowDiagram() {
  const w = 84
  const top = 44
  const mid = 120
  const cols = { client: 14, api: 126, lambda: 238, step: 350 }
  return (
    <svg viewBox="0 0 460 250" className="h-auto w-full" role="img" aria-label="Request flow: client to API Gateway to Lambda to Step Functions to Bedrock, with EFS and RDS data stores and CloudWatch observability.">
      {/* top flow */}
      <Node x={cols.client} y={top} w={w} h={40} label="Client" />
      <Node x={cols.api} y={top} w={w} h={40} label="API Gateway" />
      <Node x={cols.lambda} y={top} w={w} h={40} label="Lambda" />
      <Node x={cols.step} y={top} w={w} h={40} label="Step Fn" />
      <Arrow from={[cols.client + w, top + 20]} to={[cols.api, top + 20]} />
      <Arrow from={[cols.api + w, top + 20]} to={[cols.lambda, top + 20]} />
      <Arrow from={[cols.lambda + w, top + 20]} to={[cols.step, top + 20]} />
      {/* second tier */}
      <Node x={cols.api} y={mid} w={w} h={40} label="EFS" dim />
      <Node x={cols.lambda} y={mid} w={w} h={40} label="RDS" dim />
      <Node x={cols.step} y={mid} w={w} h={40} label="Bedrock" accent />
      <Arrow from={[cols.api + w / 2, top + 40]} to={[cols.api + w / 2, mid]} dir="down" />
      <Arrow from={[cols.lambda + w / 2, top + 40]} to={[cols.lambda + w / 2, mid]} dir="down" />
      <Arrow from={[cols.step + w / 2, top + 40]} to={[cols.step + w / 2, mid]} dir="down" accent />
      {/* observability */}
      <rect x={14} y={194} width={420} height={30} rx={7} className="fill-surface/40 stroke-hairline [stroke-width:1.5]" />
      <text x={224} y={209} textAnchor="middle" dominantBaseline="middle" className="fill-muted font-mono" style={{ fontSize: 9 }}>CloudWatch · metrics · logs · traces</text>
    </svg>
  )
}

const REGISTRY = {
  cost: CostDiagram,
  hubspoke: HubSpokeDiagram,
  fargate: FargateDiagram,
  aiflow: AiFlowDiagram,
} as const

export function Diagram({ name }: { name: keyof typeof REGISTRY }) {
  const Cmp = REGISTRY[name]
  return <Cmp />
}
