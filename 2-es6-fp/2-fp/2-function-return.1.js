function getAddFunction (x) {
  return function (y) {
    return x + y
  }
}

const addBy2 = getAddFunction(2)
const addBy5 = getAddFunction(5)

console.log(addBy2(10))
console.log(addBy5(10))
