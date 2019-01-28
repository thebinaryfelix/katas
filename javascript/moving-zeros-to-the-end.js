// https://www.codewars.com/kata/moving-zeros-to-the-end

const moveZeros = (arr) => {
  const zeroes = [];
  const enteredArr = arr;
  for (let i = 0; i < arr.length; i += 1) {
    if (enteredArr[i] === 0) {
      zeroes.push(0);
      enteredArr.splice(i, 1);
      i = 0;
    }
  }
  return enteredArr.concat(zeroes);
};
