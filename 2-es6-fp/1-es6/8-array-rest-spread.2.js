const messages = [
  'Hi',
  'Hello',
  ':D',
  'next'
]

const [ first, ...rest ] = messages
console.log(first)
console.log(rest)
