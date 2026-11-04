// 12-hole alto C ocarina fingerings for the five in-game notes.
//
// Hole ids:
//   L1–L4  left hand index, middle, ring, pinky (front)
//   R1–R4  right hand index, middle, ring, pinky (front)
//   S1, S2 sub holes (small, front) – only closed for the lowest notes (A4/Bb4)
//   LT, RT left / right thumb (back)
//
// `covered` lists the holes that are closed. Everything else is open.
// Based on the standard 12-hole chart – check against your own ocarina's chart.
const MAIN = ['L1', 'L2', 'L3', 'L4', 'R1', 'R2', 'R3', 'R4', 'LT', 'RT']

export const FINGERINGS = {
  D5: { note: 'D', octave: 5, covered: MAIN.filter((h) => h !== 'R4') },
  F5: { note: 'F', octave: 5, covered: ['L1', 'L2', 'L3', 'L4', 'R1', 'LT', 'RT'] },
  A5: { note: 'A', octave: 5, covered: ['L1', 'L2', 'L4', 'LT', 'RT'] },
  B5: { note: 'B', octave: 5, covered: ['L1', 'L4', 'LT', 'RT'] },
  D6: { note: 'D', octave: 6, covered: ['L4', 'RT'] },
}

// In-game button -> pitch
export const BUTTON_PITCH = {
  A: 'D5',
  DOWN: 'F5',
  RIGHT: 'A5',
  LEFT: 'B5',
  UP: 'D6',
}
