class Person {
  constructor (name) {
    if (!name) {
      this.name = 'no name'
    } else {
      this.name = name
    }
  }
}

const obj = new Person()
console.log(obj.name)
