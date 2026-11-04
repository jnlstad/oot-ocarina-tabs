// 12-hole alto C ocarina tab diagram, drawn in the style of STL Ocarina's charts:
// the body slants up to the right, the mouthpiece points down, and the two thumb
// holes (back of the ocarina) sit outside the outline next to the mouthpiece.
// Filled = covered, outline = open.

const BIG = 20
const SMALL = 12

const HOLES = [
  // Left hand: diagonal from the lower-left end up toward the middle
  { id: 'L1', x: 82, y: 330, r: BIG },
  { id: 'L2', x: 130, y: 308, r: BIG },
  { id: 'L3', x: 165, y: 270, r: BIG },
  { id: 'L4', x: 190, y: 226, r: BIG },
  { id: 'S1', x: 160, y: 348, r: SMALL },
  // Right hand: cluster toward the tip
  { id: 'R1', x: 268, y: 298, r: BIG },
  { id: 'R2', x: 290, y: 245, r: BIG },
  { id: 'R3', x: 330, y: 208, r: BIG },
  { id: 'R4', x: 372, y: 178, r: BIG },
  { id: 'S2', x: 256, y: 210, r: SMALL },
  // Thumbs (back)
  { id: 'LT', x: 166, y: 432, r: BIG },
  { id: 'RT', x: 320, y: 382, r: BIG },
]

const BODY = [
  'M440 96',
  'C456 92 466 108 455 130', // rounded tip
  'C405 215 335 290 300 360', // right edge
  'C286 392 290 450 260 463', // down into the mouthpiece
  'C242 471 228 462 224 444',
  'C216 410 204 394 160 392', // back up to the underside
  'L62 383',
  'C22 380 8 346 30 314', // round left end
  'C84 236 250 158 420 100', // top edge back to the tip
  'C428 97 434 96 440 96 Z',
].join(' ')

export default function OcarinaDiagram({ covered, label }) {
  return (
    <svg className="ocarina" viewBox="0 84 480 392" role="img" aria-label={label}>
      <path className="ocarina__body" d={BODY} />
      {HOLES.map((h) => (
        <circle
          key={h.id}
          className={covered.includes(h.id) ? 'hole hole--covered' : 'hole'}
          cx={h.x}
          cy={h.y}
          r={h.r}
        />
      ))}
    </svg>
  )
}
