// The 12 songs and their in-game input sequences.
// Buttons: A, UP, DOWN, LEFT, RIGHT (the C-buttons).
export const SONGS = [
  { id: 'zelda', name: "Zelda's Lullaby", color: 'white', notes: ['LEFT', 'UP', 'RIGHT', 'LEFT', 'UP', 'RIGHT'] },
  { id: 'epona', name: "Epona's Song", color: 'white', notes: ['UP', 'LEFT', 'RIGHT', 'UP', 'LEFT', 'RIGHT'] },
  { id: 'saria', name: "Saria's Song", color: 'white', notes: ['DOWN', 'RIGHT', 'LEFT', 'DOWN', 'RIGHT', 'LEFT'] },
  { id: 'sun', name: "Sun's Song", color: 'white', notes: ['RIGHT', 'DOWN', 'UP', 'RIGHT', 'DOWN', 'UP'] },
  { id: 'time', name: 'Song of Time', color: 'white', notes: ['RIGHT', 'A', 'DOWN', 'RIGHT', 'A', 'DOWN'] },
  { id: 'storms', name: 'Song of Storms', color: 'white', notes: ['A', 'DOWN', 'UP', 'A', 'DOWN', 'UP'] },
  { id: 'minuet', name: 'Minuet of Forest', color: 'green', notes: ['A', 'UP', 'LEFT', 'RIGHT', 'LEFT', 'RIGHT'] },
  { id: 'bolero', name: 'Bolero of Fire', color: 'red', notes: ['DOWN', 'A', 'DOWN', 'A', 'RIGHT', 'DOWN', 'RIGHT', 'DOWN'] },
  { id: 'serenade', name: 'Serenade of Water', color: 'blue', notes: ['A', 'DOWN', 'RIGHT', 'RIGHT', 'LEFT'] },
  { id: 'requiem', name: 'Requiem of Spirit', color: 'orange', notes: ['A', 'DOWN', 'A', 'RIGHT', 'DOWN', 'A'] },
  { id: 'nocturne', name: 'Nocturne of Shadow', color: 'purple', notes: ['LEFT', 'RIGHT', 'RIGHT', 'A', 'LEFT', 'RIGHT', 'DOWN'] },
  { id: 'prelude', name: 'Prelude of Light', color: 'yellow', notes: ['UP', 'RIGHT', 'UP', 'RIGHT', 'LEFT', 'UP'] },
]

export const NOTE_COLORS = {
  white: { fill: '#f4f1e6', shade: '#b9b4a2' },
  green: { fill: '#5fd14a', shade: '#2e7d22' },
  red: { fill: '#ec4a2c', shade: '#97220f' },
  blue: { fill: '#3e7cf0', shade: '#1d3f96' },
  orange: { fill: '#f39a24', shade: '#a65a0a' },
  purple: { fill: '#c24fd6', shade: '#6f2185' },
  yellow: { fill: '#f2d43a', shade: '#a68a10' },
}
