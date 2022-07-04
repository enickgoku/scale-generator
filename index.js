const muscialAlphabet = [
    'C', 'C#/Db', 'D', 'D#/Eb',
    'E', 'F', 'F#/Gb', 'G', 'G#/Ab',
    'A', 'A#/Bb', 'B'
]

const scales = ['Major', 'Minor']

const majorScaleFormula = [1, 2, 3, 4, 5, 6, 7]

const generateScale = (scale) => {

}

const LABELS = [
    'C',
    'C#/Db',
    'D',
    'D#/Eb',
    'E',
    'F',
    'F#/Gb',
    'G',
    'G#/Ab',
    'A',
    'A#/Bb',
    'B',
  ]
  
  const SCALES = {
    'major': [2, 2, 1, 2, 2, 2, 1],
    'minor': [2, 1, 2, 2, 1, 2, 2],
    'melodic-minor': [2, 1, 2, 2, 2, 2, 2],
    'egyptian': [2, 2, 1, 2, 2, 1, 2],
    'harmonic-minor': [2, 1, 2, 2, 1, 2, 3],
  }
  
  const getScale = () => {
    const [, , root, type, length] = process.argv
  
    if (!root) throw new Error('A root is required.')
    if (!type) throw new Error('A type is required.')
  
    let scale = SCALES[type]
    const single = scale
  
    if (!scale) throw new Error(`Unknown scale type: ${type}`)
  
    let position = 0
  
    // Find the root note
    const start = LABELS.find((label, index) => {
      if (label === root) {
        position = index
        return true
      }
    })
  
    if (!start) throw new Error('Invalid root note provided.')
  
    if (length) {
      for (let i = 0; i < length; i++) {
        scale = [...scale, ...single]
      } 
    }
  
    const result = []
  
    for (const interval of scale) {
      const letter = LABELS[position]
  
      if (letter === root) {
        result.push('|', `\x1b[44m\x1b[30m${letter}\x1b[0m`)
      } else if (letter.match('#') || letter.match('b')) {
        result.push('|', letter)
      } else {
        result.push('|', `\x1b[47m\x1b[30m${letter}\x1b[0m`)
      }
  
      position += interval
  
      if (position > 11) position -= 12
    }
    return result
  }
  
  const scale = getScale()
  
  console.info(scale.join(""))