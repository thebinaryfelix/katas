// https://www.codewars.com/kata/playing-with-passphrases

const playPass = (s, n) => {
  const circularShiftedPass = s.split('').map((char, idx) => {
    const isChar = (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90);
    const isNumber = !isNaN(parseInt(char, 10));
    if (isChar) {
      let nextCharCode = char.charCodeAt(0) + n;
      if (nextCharCode > 90) {
        nextCharCode = 64 + nextCharCode - 90;
      }
      const returnChar = String.fromCharCode(nextCharCode);
      return (idx % 2 === 0) ? returnChar : returnChar.toLowerCase();
    } if (isNumber) {
      return Math.abs(parseInt(char, 10) - 9);
    } return char;
  });
  return circularShiftedPass.reverse().join('');
};

console.log(playPass('I LOVE1 YOU!!!', 1));
