class Animal {
  constructor (name) {
    this.name = name
  }

  talk () {
    console.log('...')
  }

  hi () {
    console.log('Hi, ' + this.name)
  }
}

class Cat extends Animal {
  constructor (name, age) {
    super(name)
    this.age = age
  }

  talk () {
    console.log('nyaaa ' + this.age)
  }
}

const a = new Animal('A')
const b = new Cat('B', 3)

a.talk()
a.hi()
b.talk()
b.hi()
