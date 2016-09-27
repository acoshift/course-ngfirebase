const getAddFunction = (x) => (y) => x + y

const addBy2 = getAddFunction(2)
const addBy5 = getAddFunction(5)

console.log(addBy2(10))
console.log(addBy5(10))
