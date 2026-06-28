import { useEffect, useMemo, useRef, useState } from 'react'
import Globe, { type GlobeMethods } from 'react-globe.gl'
import * as THREE from 'three'
import { feature } from 'topojson-client'
import { useReducedMotion } from 'motion/react'
import landTopo from '@/data/countries-110m.json'

const ACCENT = '#34e0c4'

// AWS-region-ish points (+ Manila, home)
const REGIONS = [
  { lat: 14.6, lng: 121.0, label: 'Manila' },
  { lat: 1.35, lng: 103.8, label: 'ap-southeast-1' },
  { lat: 35.69, lng: 139.69, label: 'ap-northeast-1' },
  { lat: 19.08, lng: 72.88, label: 'ap-south-1' },
  { lat: 38.9, lng: -77.04, label: 'us-east-1' },
  { lat: 37.77, lng: -122.42, label: 'us-west' },
  { lat: 50.11, lng: 8.68, label: 'eu-central-1' },
]

// arcs radiate from the Singapore hub (hub-and-spoke, on a globe)
const HUB = REGIONS[1]
const ARCS = REGIONS.filter((_, i) => i !== 1).map((r) => ({
  startLat: HUB.lat,
  startLng: HUB.lng,
  endLat: r.lat,
  endLng: r.lng,
}))

export default function GlobeViz() {
  const globeRef = useRef<GlobeMethods | undefined>(undefined)
  const wrapRef = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const [size, setSize] = useState(380)

  const countries = useMemo(() => {
    const topo = landTopo as unknown as Parameters<typeof feature>[0]
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const fc = feature(topo, (topo as any).objects.countries) as any
    return fc.features as object[]
  }, [])

  const globeMaterial = useMemo(
    () =>
      new THREE.MeshPhongMaterial({
        color: '#0c1219',
        transparent: true,
        opacity: 0.86,
      }),
    [],
  )

  // responsive sizing
  useEffect(() => {
    const el = wrapRef.current
    if (!el) return
    const ro = new ResizeObserver(() => {
      setSize(Math.min(el.offsetWidth, 460))
    })
    ro.observe(el)
    setSize(Math.min(el.offsetWidth, 460))
    return () => ro.disconnect()
  }, [])

  // camera + auto-rotate
  useEffect(() => {
    const g = globeRef.current
    if (!g) return
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const controls = g.controls() as any
    controls.enableZoom = false
    controls.enablePan = false
    controls.enableRotate = false // ambient only — no mobile scroll trap
    controls.autoRotate = !reduce
    controls.autoRotateSpeed = 0.5
    g.pointOfView({ lat: 16, lng: 110, altitude: 2.3 }, 0)
  }, [reduce, size])

  return (
    <div
      ref={wrapRef}
      className="mx-auto w-full"
      style={{ aspectRatio: '1', maxWidth: 460 }}
    >
      <Globe
        ref={globeRef}
        width={size}
        height={size}
        backgroundColor="rgba(0,0,0,0)"
        rendererConfig={{ antialias: true, alpha: true }}
        globeMaterial={globeMaterial}
        showAtmosphere
        atmosphereColor={ACCENT}
        atmosphereAltitude={0.16}
        hexPolygonsData={countries}
        hexPolygonResolution={3}
        hexPolygonMargin={0.45}
        hexPolygonUseDots
        hexPolygonColor={() => 'rgba(52,224,196,0.5)'}
        arcsData={ARCS}
        arcColor={() => ['rgba(52,224,196,0.08)', 'rgba(52,224,196,0.9)']}
        arcAltitudeAutoScale={0.45}
        arcStroke={0.5}
        arcDashLength={0.5}
        arcDashGap={1}
        arcDashInitialGap={() => Math.random()}
        arcDashAnimateTime={reduce ? 0 : 2400}
        pointsData={REGIONS}
        pointColor={() => '#9bffef'}
        pointAltitude={0.012}
        pointRadius={0.32}
        pointResolution={18}
      />
    </div>
  )
}
