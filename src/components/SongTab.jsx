import ButtonGlyph from './ButtonGlyph.jsx'
import OcarinaDiagram from './OcarinaDiagram.jsx'
import { BUTTON_PITCH, FINGERINGS } from '../data/fingerings.js'

function noteLabel(f) {
  return f.octave === 6 ? `High ${f.note}` : f.note
}

export default function SongTab({ song }) {
  return (
    <section className="song-tab" aria-live="polite">
      <ol className="tab-cards" key={song.id}>
        {song.notes.map((button, i) => {
          const f = FINGERINGS[BUTTON_PITCH[button]]
          return (
            <li className="tab-card" key={i} style={{ '--i': i }}>
              <span className="tab-card__num">{i + 1}</span>
              <ButtonGlyph button={button} />
              <OcarinaDiagram covered={f.covered} label={`${noteLabel(f)} fingering`} />
              <span className="tab-card__note">{noteLabel(f)}</span>
            </li>
          )
        })}
      </ol>
    </section>
  )
}
