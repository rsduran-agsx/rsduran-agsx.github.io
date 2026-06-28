import { useReducedMotion } from 'motion/react'

/**
 * Custom SVG "region globe": a wireframe sphere with glowing cloud-region
 * nodes and data-flow arcs. Pure SVG/SMIL — no WebGL, fully reliable, and
 * consistent with the site's line-art diagram language.
 */

const NODES: { x: number; y: number }[] = [
  { x: 152, y: 150 },
  { x: 258, y: 138 },
  { x: 300, y: 212 },
  { x: 176, y: 258 },
  { x: 232, y: 280 },
  { x: 110, y: 200 },
]

const ARCS: string[] = [
  'M152 150 Q 246 112 300 212',
  'M110 200 Q 150 264 232 280',
  'M258 138 Q 268 208 176 258',
]

export function Globe({ className }: { className?: string }) {
  const reduce = useReducedMotion()
  return (
    <svg
      viewBox="0 0 400 400"
      className={className}
      style={{ width: '100%', height: 'auto' }}
      role="img"
      aria-label="A stylized globe of connected cloud regions."
    >
      <defs>
        <radialGradient id="globe-atmo" cx="50%" cy="50%" r="50%">
          <stop offset="60%" stopColor="rgba(52,224,196,0)" />
          <stop offset="87%" stopColor="rgba(52,224,196,0.16)" />
          <stop offset="100%" stopColor="rgba(52,224,196,0)" />
        </radialGradient>
        <radialGradient id="globe-core" cx="50%" cy="40%" r="62%">
          <stop offset="0%" stopColor="rgba(52,224,196,0.07)" />
          <stop offset="100%" stopColor="rgba(11,17,24,0)" />
        </radialGradient>
      </defs>

      {/* atmosphere + disc */}
      <circle cx="200" cy="200" r="188" fill="url(#globe-atmo)" />
      <circle cx="200" cy="200" r="165" fill="url(#globe-core)" />

      {/* wireframe: parallels + meridians */}
      <g className="stroke-hairline" fill="none" strokeWidth="1">
        <ellipse cx="200" cy="200" rx="165" ry="36" opacity="0.6" />
        <ellipse cx="200" cy="140" rx="154" ry="34" opacity="0.42" />
        <ellipse cx="200" cy="260" rx="154" ry="34" opacity="0.42" />
        <ellipse cx="200" cy="90" rx="123" ry="27" opacity="0.3" />
        <ellipse cx="200" cy="310" rx="123" ry="27" opacity="0.3" />
        <ellipse cx="200" cy="200" rx="143" ry="165" opacity="0.5" />
        <ellipse cx="200" cy="200" rx="82" ry="165" opacity="0.4" />
        <line x1="200" y1="35" x2="200" y2="365" opacity="0.4" />
      </g>

      {/* outline */}
      <circle
        cx="200"
        cy="200"
        r="165"
        fill="none"
        className="stroke-accent/40"
        strokeWidth="1.25"
      />

      {/* data-flow arcs */}
      <g fill="none" className="stroke-accent/35" strokeWidth="1.25" strokeLinecap="round">
        {ARCS.map((d, i) => (
          <path key={i} d={d} strokeDasharray="2 5" />
        ))}
      </g>

      {/* traveling packets */}
      {!reduce &&
        ARCS.map((d, i) => (
          <circle key={i} r="2.6" className="fill-accent">
            <animateMotion
              dur={`${3 + i * 0.7}s`}
              begin={`${i * 0.8}s`}
              repeatCount="indefinite"
              path={d}
            />
          </circle>
        ))}

      {/* region nodes */}
      {NODES.map((n, i) => (
        <g key={i}>
          {!reduce && (
            <circle cx={n.x} cy={n.y} r="4" className="fill-accent/40">
              <animate
                attributeName="r"
                values="4;13"
                dur="2.6s"
                begin={`${i * 0.45}s`}
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                values="0.5;0"
                dur="2.6s"
                begin={`${i * 0.45}s`}
                repeatCount="indefinite"
              />
            </circle>
          )}
          <circle cx={n.x} cy={n.y} r="6" fill="none" className="stroke-accent/40" strokeWidth="1" />
          <circle cx={n.x} cy={n.y} r="3.4" className="fill-accent" />
        </g>
      ))}
    </svg>
  )
}
