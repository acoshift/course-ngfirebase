// Get all track name in album "Crossing Field - EP"

const library = require('./library')

const result = library
  .filter((track) => track.Album === 'Crossing Field - EP')
  .map((track) => track.Name)

console.log(result)
