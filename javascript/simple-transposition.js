// https://www.codewars.com/kata/simple-transposition

const simpleTransposition = (text) => {
  let first = '';
  let second = '';
  for (let i = 0; i < text.length; i += 1) {
    if (i % 2 === 0) {
      first += text[i];
    } else {
      second += text[i];
    }
  }
  return `${first}${second}`;
};
