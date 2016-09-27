const obj = {
  name: 'a',
  email: 'a@abc.com'
}

const customKey = 'id'

const newObj = {
  ...obj,
  [customKey]: 10
}
console.log(newObj)
