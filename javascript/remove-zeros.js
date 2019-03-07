// https://www.codewars.com/kata/remove-zeros

const removeZeros = (array) => {
  if (array.length === 0) return array;
  let elementToAdd;
  let loopNumber = 0;
  let countZeroes = 0;
  for (let i = array.length - 1; i >= 0; i -= 1) {
    if (array[i] === 0 || array[i] === '0') {
      countZeroes += 1;
    }
  }
  for (let i = 0; i < array.length; i += 1) {
    // console.log(i, array.length, array);
    if (array[i] === 0 || array[i] === '0') {
      elementToAdd = array[i];
      delete array[i];
      for (let j = i + 1; j < array.length; j += 1) {
        array[j - 1] = array[j];
        delete array[j];
      }
      array[array.length - 1] = elementToAdd;
      i -= 1;
    }
    loopNumber += 1;
    if (loopNumber >= countZeroes + array.length) {
      return array;
    }
  }
};
