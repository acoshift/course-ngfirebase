const obj = {
  name: 'a',
  email: 'a@abc.com'
}

const newObj = {
  ...obj, // error ?
  id: 10
}
console.log(newObj)
