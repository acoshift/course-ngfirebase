function Person (name) {
  this.name = name
}

Person.prototype.talk = function () {
  console.log('Hi, ' + this.name)
}

const acoshift = new Person('acoshift')
acoshift.talk()
