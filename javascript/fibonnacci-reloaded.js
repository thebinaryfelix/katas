// https://www.codewars.com/kata/fibonacci-reloaded/train/javascript
// Recursive solution causes a 'server timeout' warning

const fib = n => {
  if (n <= 1) return 0
  else if (n === 2) return 1

  let finalCount = 0
  const lastTwo = {
    a: 0,
    b: 1,
  }

  for (let i = 2; i < n; i += 1) {
    finalCount = lastTwo.a + lastTwo.b
    lastTwo.a = lastTwo.b
    lastTwo.b = finalCount
  }
  return finalCount
}
