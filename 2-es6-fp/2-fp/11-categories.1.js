// Get all subcategories

const categories = require('./categories').models
const _ = require('lodash')

const result = _(categories)
  .flatMap((category) => category.subcategories)
  .map((subcategory) => subcategory.title)
  .value()

console.log(result)
