const library = require('./library')
const _ = require('lodash')

const result = _(library)
  .groupBy('Artist')
  .map((tracks, artist) => ({
    artist,
    avg: _(tracks).map((track) => track['Total Time']).mean()
  }))
  .value()

console.log(result)
