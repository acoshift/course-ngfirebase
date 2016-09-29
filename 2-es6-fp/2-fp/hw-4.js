const library = require('./library')
const _ = require('lodash')

const result = _(library)
  .groupBy('Album')
  .map((tracks, album) => ({
    album,
    tracks: _.map(tracks, (track) => track.Name),
    artists: _(tracks).map((track) => track.Artist).uniq().value()
  }))
  .value()

console.log(result)
