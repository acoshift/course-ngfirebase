console.log('var')
var a = 10

console.log('before ' + a)
if (true) {
  var a = 20
  console.log('inside if ' + a)
}
console.log('after ' + a)
