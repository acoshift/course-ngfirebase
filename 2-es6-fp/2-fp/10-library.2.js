// Get track name in year 2010 in library

const library = require('./library')

const result = library
  .filter((track) => track.Year < 2010)
  .map((track) => track.Name)

console.log(result)
