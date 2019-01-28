// https://www.codewars.com/kata/flatten-and-sort-an-array

const flattenAndSort = array => [].concat(...array).sort((a, b) => a - b);
