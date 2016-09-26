class Person {
  constructor (name) {
    this.name = name
  }

  talk () {
    console.log('Hi, ' + this.name)
  }
}

const acoshift = new Person('acoshift')
acoshift.talk()
