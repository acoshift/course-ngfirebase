const library = require('./library')
const _ = require('lodash')

const result = _(library)
  .groupBy('Artist')
  .map((tracks, artist) => ({
    artist,
    year: _(tracks).map((track) => track['Year'] || Number.POSITIVE_INFINITY).min()
  }))
  .value()

console.log(result)
