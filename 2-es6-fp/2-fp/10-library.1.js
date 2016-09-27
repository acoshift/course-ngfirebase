// Get all track name in library

const library = require('./library')

const result = library
  .map((track) => track.Name)

console.log(result)
