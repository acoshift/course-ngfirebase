const obj = {
  a: 10,
  b: 20,
  sum: () => {
    return this.a + this.b
  }
}

console.log(obj.sum())
