console.log('start')

console.log('ask A to buy pizza')
aBuyPizza((result) => {
  console.log('got ' + result)
})

console.log('ask B to buy coffee')
bBuyCoffee((result) => {
  console.log('got ' + result)
})

console.log('end')

function aBuyPizza (callback) {
  console.log('A go out')
  setTimeout(() => {
    console.log('A got pizza')
    callback('pizza')
  }, 5000)
}

function bBuyCoffee (callback) {
  console.log('B go out')
  setTimeout(() => {
    console.log('B got coffee')
    callback('coffee')
  }, 2000)
}
