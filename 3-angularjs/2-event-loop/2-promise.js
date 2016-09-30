console.log('start')

console.log('ask A to buy pizza')
aBuyPizza()
  .then((result) => {
    console.log('got ' + result)
  })

console.log('ask B to buy coffee')
bBuyCoffee()
  .then((result) => {
    console.log('got ' + result)
  })

console.log('end')

function aBuyPizza () {
  return new Promise((resolve, reject) => {
    console.log('A go out')
    setTimeout(() => {
      console.log('A got pizza')
      resolve('pizza')
    }, 5000)
  })
}

function bBuyCoffee () {
  return new Promise((resolve, reject) => {
    console.log('B go out')
    setTimeout(() => {
      console.log('B got coffee')
      resolve('coffee')
    }, 2000)
  })
}
