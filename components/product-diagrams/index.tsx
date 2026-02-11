'use client'

/** Shared SVG diagrams for product pages — cutter profiles and chain layouts matching page specs */

export function FullChiselCutterSvg() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 300 150"
      fill="none"
      stroke="#374151"
      strokeWidth={1.2}
      className="w-full h-full max-h-[20rem] object-contain"
      aria-label="Full-chisel cutter profile — square corner, top plate, depth gauge"
    >
      <title>Full-Chisel: Square-corner cutter profile</title>
      <rect width={300} height={150} fill="#fafafa" />
      <text x={150} y={16} textAnchor="middle" fontSize={12} fontWeight={700} fontFamily="system-ui,sans-serif" fill="#111">
        Full-Chisel (Square-Corner)
      </text>
      <g transform="translate(50,30)">
        <path d="M8 90 L8 42 L70 42 L88 58 L88 90 L75 90 L75 70 L20 70 L20 90 Z" fill="#e8eaed" stroke="#4b5563" strokeWidth={1.5} />
        <path d="M70 42 L88 58" stroke="#059669" strokeWidth={2.5} strokeLinecap="square" />
        <circle cx={70} cy={50} r={3} fill="none" stroke="#059669" strokeWidth={1} />
        <text x={79} y={48} fontSize={9} fontWeight={600} fill="#059669">90°</text>
        <text x={48} y={38} fontSize={9} fill="#4b5563">Top plate</text>
        <text x={10} y={80} fontSize={9} fill="#4b5563">Side plate</text>
        <text x={45} y={95} fontSize={9} fill="#4b5563">Gullet</text>
        <text x={82} y={82} fontSize={9} fill="#4b5563">Depth gauge</text>
      </g>
      <text x={150} y={138} textAnchor="middle" fontSize={10} fill="#6b7280">
        Square cutting corner · Max chip clearance · Softwoods
      </text>
    </svg>
  )
}

export function SemiChiselCutterSvg() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 300 150"
      fill="none"
      stroke="#374151"
      strokeWidth={1.2}
      className="w-full h-full max-h-[20rem] object-contain"
      aria-label="Semi-chisel cutter profile — rounded cutting corner"
    >
      <title>Semi-Chisel: Rounded-corner cutter profile</title>
      <rect width={300} height={150} fill="#fafafa" />
      <text x={150} y={16} textAnchor="middle" fontSize={12} fontWeight={700} fontFamily="system-ui,sans-serif" fill="#111">
        Semi-Chisel (Rounded-Corner)
      </text>
      <g transform="translate(50,30)">
        <path d="M8 90 L8 42 L58 42 Q90 48 88 62 L88 90 L75 90 L75 70 L20 70 L20 90 Z" fill="#e8eaed" stroke="#4b5563" strokeWidth={1.5} />
        <path d="M58 42 Q78 44 88 62" stroke="#059669" strokeWidth={2.5} fill="none" />
        <text x={73} y={50} fontSize={9} fontWeight={600} fill="#059669">Rounded</text>
        <text x={48} y={38} fontSize={9} fill="#4b5563">Top plate</text>
        <text x={10} y={80} fontSize={9} fill="#4b5563">Side plate</text>
        <text x={45} y={95} fontSize={9} fill="#4b5563">Gullet</text>
        <text x={82} y={82} fontSize={9} fill="#4b5563">Depth gauge</text>
      </g>
      <text x={150} y={138} textAnchor="middle" fontSize={10} fill="#6b7280">
        Rounded cutting corner · Edge retention · Hardwoods, dirty wood
      </text>
    </svg>
  )
}

/** Low-profile cutter: reduced depth, low-kickback geometry */
export function LowProfileCutterSvg() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 300 150"
      fill="none"
      stroke="#374151"
      strokeWidth={1.2}
      className="w-full h-full max-h-[20rem] object-contain"
      aria-label="Low-profile cutter — reduced depth, low-kickback geometry"
    >
      <title>Low Profile: Reduced cutter depth, low-kickback</title>
      <rect width={300} height={150} fill="#fafafa" />
      <text x={150} y={16} textAnchor="middle" fontSize={12} fontWeight={700} fontFamily="system-ui,sans-serif" fill="#111">
        Low Profile (Low-Kickback)
      </text>
      <g transform="translate(50,30)">
        {/* Shorter cutter profile: reduced depth for safety */}
        <path d="M8 90 L8 48 L52 48 Q82 54 80 65 L80 90 L68 90 L68 72 L20 72 L20 90 Z" fill="#e8eaed" stroke="#4b5563" strokeWidth={1.5} />
        <path d="M52 48 Q70 50 80 65" stroke="#059669" strokeWidth={2.5} fill="none" />
        <text x={66} y={54} fontSize={9} fontWeight={600} fill="#059669">Reduced depth</text>
        <text x={44} y={44} fontSize={9} fill="#4b5563">Top plate</text>
        <text x={10} y={78} fontSize={9} fill="#4b5563">Side plate</text>
        <text x={42} y={95} fontSize={9} fill="#4b5563">Gullet</text>
        <text x={73} y={80} fontSize={9} fill="#4b5563">Depth limiter</text>
      </g>
      <text x={150} y={138} textAnchor="middle" fontSize={10} fill="#6b7280">
        Shorter cutter · Bumper links · ANSI low-kickback compliant
      </text>
    </svg>
  )
}

/** Chain layout: .325 inch pitch — drive links + rivets */
export function Chain325Svg() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 280 140"
      fill="none"
      stroke="#374151"
      strokeWidth={1.2}
      className="w-full h-full max-h-[20rem] object-contain"
      aria-label="Chain layout — .325 inch pitch"
    >
      <title>Chain layout: .325&quot; pitch</title>
      <rect width={280} height={140} fill="#fafafa" />
      <text x={140} y={16} textAnchor="middle" fontSize={12} fontWeight={700} fontFamily="system-ui,sans-serif" fill="#111">
        .325&quot; Pitch Chain
      </text>
      <g transform="translate(20,35)">
        <path d="M0 28 L0 8 L24 8 L28 18 L28 28 Z" fill="#e8eaed" stroke="#6b7280" strokeWidth={1.2} />
        <path d="M30 28 L30 8 L54 8 L58 18 L58 28 Z" fill="#e8eaed" stroke="#6b7280" strokeWidth={1.2} />
        <path d="M60 28 L60 8 L84 8 L88 18 L88 28 Z" fill="#e8eaed" stroke="#6b7280" strokeWidth={1.2} />
        <path d="M90 28 L90 8 L114 8 L118 18 L118 28 Z" fill="#e8eaed" stroke="#6b7280" strokeWidth={1.2} />
        <path d="M120 28 L120 8 L144 8 L148 18 L148 28 Z" fill="#e8eaed" stroke="#6b7280" strokeWidth={1.2} />
        <circle cx={14} cy={28} r={3.5} fill="#374151" stroke="#1f2937" strokeWidth={1} />
        <circle cx={44} cy={28} r={3.5} fill="#374151" stroke="#1f2937" strokeWidth={1} />
        <circle cx={74} cy={28} r={3.5} fill="#374151" stroke="#1f2937" strokeWidth={1} />
        <circle cx={104} cy={28} r={3.5} fill="#374151" stroke="#1f2937" strokeWidth={1} />
        <circle cx={134} cy={28} r={3.5} fill="#374151" stroke="#1f2937" strokeWidth={1} />
        <text x={14} y={52} textAnchor="middle" fontSize={8} fill="#374151">R1</text>
        <text x={44} y={52} textAnchor="middle" fontSize={8} fill="#374151">R2</text>
        <text x={74} y={52} textAnchor="middle" fontSize={8} fill="#374151">R3</text>
        <line x1={14} y1={40} x2={74} y2={40} stroke="#059669" strokeWidth={1.5} strokeDasharray="3 2" />
        <polygon points="74,40 71,37 71,43" fill="#059669" />
        <text x={44} y={34} textAnchor="middle" fontSize={8} fontWeight={600} fill="#059669">.325&quot; × 2</text>
      </g>
      <text x={140} y={125} textAnchor="middle" fontSize={10} fill="#6b7280">
        Pitch 0.325&quot; (8.3 mm) · Cutter–Tie–Cutter configuration
      </text>
    </svg>
  )
}

/** Chain layout: 3/8 inch pitch — drive links + rivets */
export function Chain38Svg() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 280 140"
      fill="none"
      stroke="#374151"
      strokeWidth={1.2}
      className="w-full h-full max-h-[20rem] object-contain"
      aria-label="Chain layout — 3/8 inch pitch"
    >
      <title>Chain layout: 3/8&quot; pitch</title>
      <rect width={280} height={140} fill="#fafafa" />
      <text x={140} y={16} textAnchor="middle" fontSize={12} fontWeight={700} fontFamily="system-ui,sans-serif" fill="#111">
        3/8&quot; Pitch Chain
      </text>
      <g transform="translate(20,35)">
        <path d="M0 28 L0 8 L28 8 L32 18 L32 28 Z" fill="#e8eaed" stroke="#6b7280" strokeWidth={1.2} />
        <path d="M34 28 L34 8 L62 8 L66 18 L66 28 Z" fill="#e8eaed" stroke="#6b7280" strokeWidth={1.2} />
        <path d="M68 28 L68 8 L96 8 L100 18 L100 28 Z" fill="#e8eaed" stroke="#6b7280" strokeWidth={1.2} />
        <path d="M102 28 L102 8 L130 8 L134 18 L134 28 Z" fill="#e8eaed" stroke="#6b7280" strokeWidth={1.2} />
        <path d="M136 28 L136 8 L164 8 L168 18 L168 28 Z" fill="#e8eaed" stroke="#6b7280" strokeWidth={1.2} />
        <circle cx={16} cy={28} r={4} fill="#374151" stroke="#1f2937" strokeWidth={1} />
        <circle cx={50} cy={28} r={4} fill="#374151" stroke="#1f2937" strokeWidth={1} />
        <circle cx={84} cy={28} r={4} fill="#374151" stroke="#1f2937" strokeWidth={1} />
        <circle cx={118} cy={28} r={4} fill="#374151" stroke="#1f2937" strokeWidth={1} />
        <circle cx={152} cy={28} r={4} fill="#374151" stroke="#1f2937" strokeWidth={1} />
        <line x1={16} y1={44} x2={84} y2={44} stroke="#059669" strokeWidth={1.5} strokeDasharray="3 2" />
        <polygon points="84,44 80,41 80,47" fill="#059669" />
        <text x={50} y={38} textAnchor="middle" fontSize={8} fontWeight={600} fill="#059669">3/8&quot; × 2</text>
      </g>
      <text x={140} y={125} textAnchor="middle" fontSize={10} fill="#6b7280">
        Pitch 0.375&quot; (9.525 mm) · Cutter–Tie–Cutter configuration
      </text>
    </svg>
  )
}

/** Low-profile chain: .325 pitch with anti-kickback bumper links */
export function ChainLowProfileSvg() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 280 140"
      fill="none"
      stroke="#374151"
      strokeWidth={1.2}
      className="w-full h-full max-h-[20rem] object-contain"
      aria-label="Low-profile chain — .325 pitch with bumper links"
    >
      <title>Low Profile chain: .325&quot; pitch, anti-kickback bumpers</title>
      <rect width={280} height={140} fill="#fafafa" />
      <text x={140} y={16} textAnchor="middle" fontSize={12} fontWeight={700} fontFamily="system-ui,sans-serif" fill="#111">
        Low Profile .325&quot; — Anti-Kickback
      </text>
      <g transform="translate(20,35)">
        <path d="M0 32 L0 8 L22 8 L26 20 L26 32 Z" fill="#d1d5db" stroke="#6b7280" strokeWidth={1.2} />
        <path d="M28 32 L28 16 L32 12 L36 16 L36 32 Z" fill="#059669" fillOpacity={0.4} stroke="#047857" strokeWidth={1.5} />
        <path d="M38 32 L38 8 L60 8 L64 20 L64 32 Z" fill="#d1d5db" stroke="#6b7280" strokeWidth={1.2} />
        <path d="M66 32 L66 16 L70 12 L74 16 L74 32 Z" fill="#059669" fillOpacity={0.4} stroke="#047857" strokeWidth={1.5} />
        <path d="M76 32 L76 8 L98 8 L102 20 L102 32 Z" fill="#d1d5db" stroke="#6b7280" strokeWidth={1.2} />
        <path d="M104 32 L104 16 L108 12 L112 16 L112 32 Z" fill="#059669" fillOpacity={0.4} stroke="#047857" strokeWidth={1.5} />
        <path d="M114 32 L114 8 L136 8 L140 20 L140 32 Z" fill="#d1d5db" stroke="#6b7280" strokeWidth={1.2} />
        <text x={18} y={52} textAnchor="middle" fontSize={8} fill="#6b7280">Cutter</text>
        <text x={52} y={52} textAnchor="middle" fontSize={8} fill="#047857">Bumper</text>
      </g>
      <text x={140} y={125} textAnchor="middle" fontSize={10} fill="#6b7280">
        .325&quot; pitch · Bumper links limit cutter depth · ANSI B175.1
      </text>
    </svg>
  )
}
