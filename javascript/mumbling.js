// https://www.codewars.com/kata/mumbling

const accum = s =>
  s
    .split("")
    .map((char, index) => `${char.toUpperCase()}${char.repeat(index)}`)
    .join("-")

console.log(accum("Abcd"))
