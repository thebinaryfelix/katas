// https://www.codewars.com/kata/does-my-number-look-big-in-this

const narcissistic = (value) => {
  const numberStr = value.toString().split('');
  const exponent = numberStr.length;
  const result = numberStr.map((num) => {
    const intNum = parseInt(num, 10);
    return intNum ** exponent;
  }).reduce((acc, val) => acc + val, 0);
  return result === value;
};
