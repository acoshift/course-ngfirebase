const library = require('./library')
const _ = require('lodash')

const result = _(library)
  .groupBy('Genre')
  .map((tracks, genre) => ({
    genre,
    count: tracks.length
  }))
  .value()

console.log(result)
