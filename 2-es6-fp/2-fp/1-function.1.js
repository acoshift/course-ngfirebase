let x = 0

// this function has side-effect
function addX (a) {
  x += a
}

console.log('x: ' + x)
addX(10)
console.log('x: ' + x)
