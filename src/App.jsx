import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import LockIcon from './components/LockIcon.jsx'
import SongMenu from './components/SongMenu.jsx'
import SongTab from './components/SongTab.jsx'
import { NOTE_COLORS, SONGS } from './data/songs.js'

const STORAGE_KEY = 'oot-tabs:selected'
// Stores the ids of songs you've unlocked; anything not listed is locked.
const UNLOCKED_KEY = 'oot-tabs:unlocked'

function loadInitialIndex() {
  try {
    const i = Number(localStorage.getItem(STORAGE_KEY))
    return Number.isInteger(i) && i >= 0 && i < SONGS.length ? i : 0
  } catch {
    return 0
  }
}

function loadUnlocked() {
  try {
    const ids = JSON.parse(localStorage.getItem(UNLOCKED_KEY) ?? '[]')
    const known = new Set(SONGS.map((s) => s.id))
    return new Set(Array.isArray(ids) ? ids.filter((id) => known.has(id)) : [])
  } catch {
    return new Set()
  }
}

function save(key, value) {
  try {
    localStorage.setItem(key, value)
  } catch {
    /* storage unavailable – ignore */
  }
}

export default function App() {
  const [index, setIndex] = useState(loadInitialIndex)
  const [unlocked, setUnlocked] = useState(loadUnlocked)
  const touchStart = useRef(null)
  const song = SONGS[index]
  const isLocked = !unlocked.has(song.id)
  const locked = useMemo(
    () => new Set(SONGS.filter((s) => !unlocked.has(s.id)).map((s) => s.id)),
    [unlocked],
  )

  useEffect(() => save(STORAGE_KEY, String(index)), [index])
  useEffect(() => save(UNLOCKED_KEY, JSON.stringify([...unlocked])), [unlocked])

  const toggleLock = () => {
    setUnlocked((prev) => {
      const next = new Set(prev)
      if (next.has(song.id)) next.delete(song.id)
      else next.add(song.id)
      return next
    })
  }

  const step = useCallback((delta) => {
    setIndex((i) => (i + delta + SONGS.length) % SONGS.length)
  }, [])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowRight') step(1)
      if (e.key === 'ArrowLeft') step(-1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [step])

  const onTouchStart = (e) => {
    const t = e.touches[0]
    touchStart.current = { x: t.clientX, y: t.clientY }
  }
  const onTouchEnd = (e) => {
    if (!touchStart.current) return
    const t = e.changedTouches[0]
    const dx = t.clientX - touchStart.current.x
    const dy = t.clientY - touchStart.current.y
    touchStart.current = null
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.5) step(dx < 0 ? 1 : -1)
  }

  return (
    <div className="app">
      <header className="app__header">
        <h1>Ocarina Songs</h1>
        <p className="app__sub">12-hole alto C</p>
      </header>

      <SongMenu songs={SONGS} selectedIndex={index} locked={locked} onSelect={setIndex} />

      <main className="app__main" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
        <div className="song-banner">
          <button type="button" className="song-banner__nav" aria-label="Previous song" onClick={() => step(-1)}>
            ‹
          </button>
          <h2 className="song-banner__title" key={song.id}>
            <span className="song-banner__dot" style={{ background: NOTE_COLORS[song.color].fill }} />
            {song.name}
          </h2>
          <button type="button" className="song-banner__nav" aria-label="Next song" onClick={() => step(1)}>
            ›
          </button>
        </div>

        <div className="song-actions">
          <button
            type="button"
            className={`lock-toggle${isLocked ? ' lock-toggle--locked' : ''}`}
            aria-pressed={isLocked}
            onClick={toggleLock}
          >
            <LockIcon open={!isLocked} />
            {isLocked ? 'Unlock song' : 'Lock song'}
          </button>
        </div>

        {isLocked ? (
          <div className="locked-panel" key={`${song.id}-locked`}>
            <LockIcon className="locked-panel__icon" />
            <p>This song is locked.</p>
          </div>
        ) : (
          <SongTab song={song} />
        )}

        <p className="legend">
          <span className="legend__dot legend__dot--covered" /> covered
          <span className="legend__dot" /> open
          <span className="legend__sep">·</span> dots outside = thumb holes
        </p>
      </main>
    </div>
  )
}
