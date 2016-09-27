const x = 0

// without side-effect
function addX (a) {
  return x + a
}

console.log('x: ' + x)
const newX = addX(10)
console.log('x: ' + x)
console.log('newX: ' + newX)
