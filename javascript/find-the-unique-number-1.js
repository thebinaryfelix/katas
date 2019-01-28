// https://www.codewars.com/kata/find-the-unique-number-1

const findUniq = arr => {
  const numbers = [];
  arr.forEach(num => {
    if (!numbers.includes(num)) {
      numbers.push(num);
    }
  });
};
