const Observable = require('rxjs').Observable

console.log('start')

console.log('ask A to buy pizza')
aBuyPizza()
  .subscribe((result) => {
    console.log('got ' + result)
  })

console.log('ask B to buy coffee')
bBuyCoffee()
  .subscribe((result) => {
    console.log('got ' + result)
  })

console.log('end')

function aBuyPizza () {
  return Observable.create((o) => {
    console.log('A go out')
    setTimeout(() => {
      console.log('A got pizza')
      o.next('pizza')
      o.complete()
    }, 5000)
  })
}

function bBuyCoffee () {
  return Observable.create((o) => {
    console.log('B go out')
    setTimeout(() => {
      console.log('B got coffee')
      o.next('coffee')
      o.complete()
    }, 2000)
  })
}
