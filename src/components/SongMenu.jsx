import NoteIcon from './NoteIcon.jsx'

export default function SongMenu({ songs, selectedIndex, locked, onSelect }) {
  return (
    <nav className="song-menu" aria-label="Songs">
      <div className="song-menu__grid">
        {songs.map((song, i) => (
          <button
            key={song.id}
            type="button"
            className={[
              'note-btn',
              i === selectedIndex && 'note-btn--selected',
              locked.has(song.id) && 'note-btn--locked',
            ]
              .filter(Boolean)
              .join(' ')}
            aria-label={locked.has(song.id) ? `${song.name} (locked)` : song.name}
            aria-pressed={i === selectedIndex}
            onClick={() => onSelect(i)}
          >
            <NoteIcon color={song.color} />
          </button>
        ))}
      </div>
    </nav>
  )
}
