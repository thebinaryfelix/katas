// https://www.codewars.com/kata/ultimate-array-reverser

const ultimateReverse = (s) => {
  const reversedInputStr = s.join('').split('');
  return s.map(word => reversedInputStr
    .splice(reversedInputStr.length - word.length, word.length)
    .reverse('')
    .join(''));
};
