import { NOTE_COLORS } from '../data/songs.js'

// Eighth-note glyph with a soft gradient sheen.
export default function NoteIcon({ color }) {
  const c = NOTE_COLORS[color]
  const gid = `note-grad-${color}`
  return (
    <svg className="note-icon" viewBox="0 0 40 48" aria-hidden="true">
      <defs>
        <linearGradient id={gid} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.9" />
          <stop offset="0.25" stopColor={c.fill} />
          <stop offset="1" stopColor={c.shade} />
        </linearGradient>
      </defs>
      <g fill={`url(#${gid})`} stroke="#1a1208" strokeWidth="1.3" strokeLinejoin="round">
        <path d="M21 5.5 C22.5 13 34 15.5 33.5 28 C31.5 22 27.5 19.5 23.5 19 L23.5 37 L20.5 37 L20.5 5.5 Z" />
        <ellipse cx="14.5" cy="37.5" rx="9" ry="6.4" transform="rotate(-24 14.5 37.5)" />
      </g>
    </svg>
  )
}
