// Get all unique artist names

const library = require('./library')
const _ = require('lodash')

const result = _(library)
  .map((track) => track.Artist)
  .uniq()
  .value()

console.log(result)
