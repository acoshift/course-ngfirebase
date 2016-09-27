// Get track name in year 2016 and artist is "Rita" in library

const library = require('./library')

const result = library
  .filter((track) => track.Year === 2016 && track.Artist === 'Scandal')
  .map((track) => track.Name)

console.log(result)
