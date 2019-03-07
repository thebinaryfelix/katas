// https://www.codewars.com/kata/dubstep

const songDecoder = song => song
  .replace(/(WUB)/g, ' ')
  .split(' ')
  .filter(word => !(word[0] === undefined))
  .join(' ');
