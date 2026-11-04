// Controller-style button badge: blue "A" or yellow C-button arrow.
const ARROW_ROTATION = { UP: 0, RIGHT: 90, DOWN: 180, LEFT: 270 }
const NAMES = { A: 'A', UP: 'C-Up', DOWN: 'C-Down', LEFT: 'C-Left', RIGHT: 'C-Right' }

export default function ButtonGlyph({ button }) {
  const isA = button === 'A'
  return (
    <svg className="button-glyph" viewBox="0 0 24 24" role="img" aria-label={NAMES[button]}>
      <circle cx="12" cy="12" r="10.5" className={isA ? 'button-glyph--a' : 'button-glyph--c'} />
      {isA ? (
        <text x="12" y="16.2" textAnchor="middle" className="button-glyph__letter">A</text>
      ) : (
        <path
          d="M12 6.2 L17.4 15.4 L6.6 15.4 Z"
          className="button-glyph__arrow"
          transform={`rotate(${ARROW_ROTATION[button]} 12 12)`}
        />
      )}
    </svg>
  )
}
