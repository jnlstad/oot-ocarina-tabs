// Top-down drawing of a 12-hole alto C ocarina. Filled = covered, outline = open.
// The two thumb holes (back of the ocarina) are drawn in the strip underneath.

const FRONT_HOLES = [
  { id: 'L1', x: 24, y: 27, r: 6.2 },
  { id: 'L2', x: 36, y: 20, r: 6.2 },
  { id: 'L3', x: 49, y: 17.5, r: 6 },
  { id: 'L4', x: 47, y: 34.5, r: 4 },
  { id: 'R1', x: 65, y: 17.5, r: 6.4 },
  { id: 'R2', x: 78, y: 19, r: 6.2 },
  { id: 'R3', x: 90, y: 23.5, r: 5.8 },
  { id: 'R4', x: 98, y: 35.5, r: 4.2 },
  { id: 'S1', x: 79, y: 39, r: 2.8 },
  { id: 'S2', x: 87, y: 43, r: 2.8 },
]

const THUMB_HOLES = [
  { id: 'LT', x: 44, y: 80, r: 6 },
  { id: 'RT', x: 76, y: 80, r: 6 },
]

const BODY =
  'M14 34 C10 18 30 8 58 9.5 C87 11 112 18 112 32 C112 46 90 54 60 54 C36 54 18 48 14 34 Z'
const MOUTHPIECE = 'M19 39 L6 53 Q2.5 58.5 8 60.5 L12.5 61.5 Q16.5 62.5 19.5 58.5 L31 46 Z'

function Hole({ hole, covered }) {
  return (
    <circle
      className={covered ? 'hole hole--covered' : 'hole'}
      cx={hole.x}
      cy={hole.y}
      r={hole.r}
    />
  )
}

export default function OcarinaDiagram({ covered, label }) {
  const isCovered = (id) => covered.includes(id)
  return (
    <svg className="ocarina" viewBox="0 0 120 92" role="img" aria-label={label}>
      <g transform="rotate(-8 60 34)">
        <path className="ocarina__body" d={MOUTHPIECE} />
        <path className="ocarina__body" d={BODY} />
        <rect className="ocarina__window" x="18" y="38.5" width="6" height="3.4" rx="1" transform="rotate(-42 21 40.2)" />
        {FRONT_HOLES.map((h) => (
          <Hole key={h.id} hole={h} covered={isCovered(h.id)} />
        ))}
      </g>
      <rect className="ocarina__back" x="30" y="71" width="60" height="18" rx="9" />
      {THUMB_HOLES.map((h) => (
        <Hole key={h.id} hole={h} covered={isCovered(h.id)} />
      ))}
    </svg>
  )
}
