// Get all unique artists for each album
/*
  [
    {
      Album: "album1",
      Artists: ["artist1", "artist2"]
    }
  ]
*/

const library = require('./library')
const _ = require('lodash')

const result = _(library)
  .groupBy((track) => track.Album)
  .map((album, name) => ({
    Album: name,
    Artists: _(album).map((track) => track.Artist).uniq().value()
  }))
  .value()

console.log(result)
