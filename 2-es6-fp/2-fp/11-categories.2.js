/*
  [
    { category: '', subcategory: '' },
    { category: '', subcategory: '' }
  ]
*/

const categories = require('./categories').models
const _ = require('lodash')

const result = _(categories)
  .flatMap((category) =>
    _.map(category.subcategories, (subcategory) => ({
      category: category.title,
      subcategory: subcategory.title
    }))
  )
  .value()

console.log(result)
