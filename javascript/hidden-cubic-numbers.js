// https://www.codewars.com/kata/hidden-cubic-numbers

const isSumOfCubes = (s) => {
  const checkCubic = (numbersArr) => {
    const result = numbersArr.map(num => parseInt(num, 10) ** 3).reduce((acc, val) => acc + val, 0);
    return result === parseInt(numbersArr.join(''), 10);
  };

  const numArr = s.split('').map((num) => {
    const value = !isNaN(parseInt(num, 10)) ? num : ' ';
    return value;
  });
  // Adding an extra element to the end of the array to execute checkCubic() one last time.
  numArr.push(' ');

  let resultStr = '';
  let sumOfCubics = 0;
  let numToCheck = [];
  numArr.forEach((num) => {
    if (num === ' ' || numToCheck.length === 3) {
      if (checkCubic(numToCheck)) {
        const cubicNum = parseInt(numToCheck.join(''), 10);
        resultStr += `${cubicNum} `;
        sumOfCubics += parseInt(cubicNum, 10);
      }
      numToCheck = [];
      if (num !== ' ') numToCheck.push(num);
    } else {
      numToCheck.push(num);
    }
  });
  if (resultStr === '') return 'Unlucky';
  return `${resultStr}${sumOfCubics} Lucky`;
};
