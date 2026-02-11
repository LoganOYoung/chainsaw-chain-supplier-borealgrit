'use client'

/** SVG diagrams for Fitment Finder "How to Identify Your Specifications" section */

/** Step 1: Guide bar tail end showing stamped Pitch, Gauge, Drive Link count */
export function BarStampingSvg() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 240 180"
      fill="none"
      stroke="#374151"
      strokeWidth={1.2}
      className="w-full h-full min-h-[10rem] object-contain"
      aria-label="Guide bar tail end with stamped specifications"
    >
      <title>Guide bar tail end — stamped Pitch, Gauge, Drive Link count</title>
      <rect width={240} height={180} fill="#fafafa" />
      <g transform="translate(20,30)">
        {/* Simplified guide bar tail — rectangular bar with groove */}
        <rect x={0} y={20} width={200} height={50} rx={2} fill="#e5e7eb" stroke="#6b7280" strokeWidth={1.5} />
        <path d="M20 25 L20 65 L180 65 L180 25" fill="#d1d5db" stroke="#9ca3af" strokeWidth={1} />
        <rect x={30} y={35} width={140} height={30} fill="#e8eaed" stroke="#6b7280" strokeWidth={1} />
        <text x={100} y={25} textAnchor="middle" fontSize={9} fill="#6b7280">Tail end</text>
        {/* Stamped markings — typical location */}
        <text x={50} y={55} textAnchor="middle" fontSize={14} fontWeight={700} fontFamily="monospace" fill="#111">.325</text>
        <text x={100} y={55} textAnchor="middle" fontSize={14} fontWeight={700} fontFamily="monospace" fill="#111">.050</text>
        <text x={150} y={55} textAnchor="middle" fontSize={14} fontWeight={700} fontFamily="monospace" fill="#111">56DL</text>
        <rect x={35} y={62} width={30} height={14} fill="none" stroke="#059669" strokeWidth={1.5} strokeDasharray="2 2" />
        <rect x={85} y={62} width={30} height={14} fill="none" stroke="#059669" strokeWidth={1.5} strokeDasharray="2 2" />
        <rect x={135} y={62} width={30} height={14} fill="none" stroke="#059669" strokeWidth={1.5} strokeDasharray="2 2" />
        <text x={50} y={88} textAnchor="middle" fontSize={8} fill="#059669">Pitch</text>
        <text x={100} y={88} textAnchor="middle" fontSize={8} fill="#059669">Gauge</text>
        <text x={150} y={88} textAnchor="middle" fontSize={8} fill="#059669">DL count</text>
      </g>
    </svg>
  )
}

/** Step 2: Drive link with stamped model number */
export function DriveLinkMarkingSvg() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 240 180"
      fill="none"
      stroke="#374151"
      strokeWidth={1.2}
      className="w-full h-full min-h-[10rem] object-contain"
      aria-label="Drive link with stamped model number"
    >
      <title>Drive link — stamped model number (e.g., Oregon 91, Stihl 6)</title>
      <rect width={240} height={180} fill="#fafafa" />
      <g transform="translate(60,25)">
        {/* Drive link shape — tang that fits in bar groove */}
        <path d="M0 60 L0 20 L15 8 L90 8 L105 20 L105 60 L90 60 L90 25 L15 25 L15 60 Z" fill="#e8eaed" stroke="#6b7280" strokeWidth={1.5} />
        <rect x={25} y={30} width={65} height={25} fill="#f3f4f6" stroke="#9ca3af" strokeWidth={1} />
        <text x={57} y={48} textAnchor="middle" fontSize={16} fontWeight={700} fontFamily="monospace" fill="#111">91</text>
        <text x={57} y={75} textAnchor="middle" fontSize={9} fill="#6b7280">Stamped number</text>
        <text x={57} y={90} textAnchor="middle" fontSize={8} fill="#059669">Oregon 91 · Stihl 6 · etc.</text>
      </g>
    </svg>
  )
}

/** Step 3: Chain laid flat — count drive links */
export function CountDriveLinksSvg() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 240 180"
      fill="none"
      stroke="#374151"
      strokeWidth={1.2}
      className="w-full h-full min-h-[10rem] object-contain"
      aria-label="Chain laid flat — count drive links for chain length"
    >
      <title>Count drive links — lay chain flat, count each tang</title>
      <rect width={240} height={180} fill="#fafafa" />
      <g transform="translate(10,35)">
        {/* Chain segment: 6 drive links shown, numbered */}
        <path d="M0 28 L0 8 L24 8 L28 18 L28 28 Z" fill="#e8eaed" stroke="#6b7280" strokeWidth={1.2} />
        <path d="M30 28 L30 8 L54 8 L58 18 L58 28 Z" fill="#e8eaed" stroke="#6b7280" strokeWidth={1.2} />
        <path d="M60 28 L60 8 L84 8 L88 18 L88 28 Z" fill="#e8eaed" stroke="#6b7280" strokeWidth={1.2} />
        <path d="M90 28 L90 8 L114 8 L118 18 L118 28 Z" fill="#e8eaed" stroke="#6b7280" strokeWidth={1.2} />
        <path d="M120 28 L120 8 L144 8 L148 18 L148 28 Z" fill="#e8eaed" stroke="#6b7280" strokeWidth={1.2} />
        <path d="M150 28 L150 8 L174 8 L178 18 L178 28 Z" fill="#e8eaed" stroke="#6b7280" strokeWidth={1.2} />
        <path d="M180 28 L180 8 L204 8 L208 18 L208 28 Z" fill="#e8eaed" stroke="#6b7280" strokeWidth={1.2} />
        <circle cx={14} cy={28} r={3} fill="#374151" />
        <circle cx={44} cy={28} r={3} fill="#374151" />
        <circle cx={74} cy={28} r={3} fill="#374151" />
        <circle cx={104} cy={28} r={3} fill="#374151" />
        <circle cx={134} cy={28} r={3} fill="#374151" />
        <circle cx={164} cy={28} r={3} fill="#374151" />
        <circle cx={194} cy={28} r={3} fill="#374151" />
        <text x={14} y={52} textAnchor="middle" fontSize={9} fontWeight={600} fill="#059669">1</text>
        <text x={44} y={52} textAnchor="middle" fontSize={9} fontWeight={600} fill="#059669">2</text>
        <text x={74} y={52} textAnchor="middle" fontSize={9} fontWeight={600} fill="#059669">3</text>
        <text x={104} y={52} textAnchor="middle" fontSize={9} fontWeight={600} fill="#059669">4</text>
        <text x={134} y={52} textAnchor="middle" fontSize={9} fontWeight={600} fill="#059669">5</text>
        <text x={164} y={52} textAnchor="middle" fontSize={9} fontWeight={600} fill="#059669">6</text>
        <text x={194} y={52} textAnchor="middle" fontSize={9} fontWeight={600} fill="#059669">…</text>
      </g>
      <text x={120} y={130} textAnchor="middle" fontSize={10} fill="#6b7280">
        Count each drive link → Total = chain length (e.g., 56DL)
      </text>
    </svg>
  )
}
