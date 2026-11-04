import { useCallback, useEffect, useRef, useState } from 'react'
import SongMenu from './components/SongMenu.jsx'
import SongTab from './components/SongTab.jsx'
import { NOTE_COLORS, SONGS } from './data/songs.js'

const STORAGE_KEY = 'oot-tabs:selected'

function loadInitialIndex() {
  try {
    const i = Number(localStorage.getItem(STORAGE_KEY))
    return Number.isInteger(i) && i >= 0 && i < SONGS.length ? i : 0
  } catch {
    return 0
  }
}

export default function App() {
  const [index, setIndex] = useState(loadInitialIndex)
  const touchStart = useRef(null)
  const song = SONGS[index]

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, String(index))
    } catch {
      /* storage unavailable – ignore */
    }
  }, [index])

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

      <SongMenu songs={SONGS} selectedIndex={index} onSelect={setIndex} />

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

        <SongTab song={song} />

        <p className="legend">
          <span className="legend__dot legend__dot--covered" /> covered
          <span className="legend__dot" /> open
          <span className="legend__sep">·</span> bottom row = thumb holes
        </p>
      </main>
    </div>
  )
}
