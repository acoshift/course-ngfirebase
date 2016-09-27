function sortWithSideEffect (arr) {
  return arr.sort()
}

const data1 = [1, 3, 2, 6, 5]
console.log('data1: ' + data1)
const sortedData1 = sortWithSideEffect(data1)
console.log('sortedData1: ' + sortedData1)
console.log('data1: ' + data1)

console.log('----------------------------')

function sortWithoutSideEffiect (arr) {
  return arr.slice().sort()
}

const data2 = [4, 6, 7, 5, 3]
console.log('data2: ' + data2)
const sortedData2 = sortWithoutSideEffiect(data2)
console.log('sortedData2: ' + sortedData2)
console.log('data2: ' + data2)
