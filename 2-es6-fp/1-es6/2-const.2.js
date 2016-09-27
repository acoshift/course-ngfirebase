const max = 100

function doSomething () {
  max = 0 // TypeError: Assignment to constant variable.
}

console.log('Max: ' + max)
doSomething()
console.log('Max: ' + max)
