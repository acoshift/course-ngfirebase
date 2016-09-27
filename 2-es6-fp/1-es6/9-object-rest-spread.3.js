const obj = {
  name: 'a',
  email: 'a@abc.com'
}

// some browser not support
const newObj = Object.assign({}, obj, { id: 10 })
console.log(newObj)
