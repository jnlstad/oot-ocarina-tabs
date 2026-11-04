// Padlock glyph; the shackle swings open when `open` is true.
export default function LockIcon({ open = false, className = '' }) {
  return (
    <svg className={`lock-icon ${className}`} viewBox="0 0 24 24" aria-hidden="true">
      <path
        className="lock-icon__shackle"
        d={open ? 'M7.5 10.5V7a4.5 4.5 0 0 1 8.7-1.6' : 'M7.5 10.5V7a4.5 4.5 0 0 1 9 0v3.5'}
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <rect x="4.5" y="10.5" width="15" height="10.5" rx="2.2" fill="currentColor" />
      <circle cx="12" cy="15.2" r="1.6" className="lock-icon__keyhole" />
    </svg>
  )
}
