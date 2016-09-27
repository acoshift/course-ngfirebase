const _ = require('lodash')

const obj = {
  name: 'a',
  email: 'a@abc.com'
}

const newObj = _.extend({}, obj, { id: 10 })
// or const newObj = _.assign({}, obj, { id: 10 })
console.log(newObj)
