const uniqueIdFromType = (type) => {
  let id = 0
  return () => `${type}-${++id}`
}

const productUniqueId = uniqueIdFromType('product')
const userUniqueId = uniqueIdFromType('user')

console.log(productUniqueId())
console.log(productUniqueId())
console.log(userUniqueId())
console.log(userUniqueId())
console.log(productUniqueId())
