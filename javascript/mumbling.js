// https://www.codewars.com/kata/mumbling

const accum = (s) => {
  let receivedString = s;
  let newS = '';
  receivedString = receivedString.toLowerCase();
  for (let i = 0; i < receivedString.length; i += 1) {
    newS += receivedString[i].toUpperCase();
    newS += receivedString[i].repeat(i);
    if (i !== receivedString.length - 1) {
      newS += '-';
    }
  }
  return newS;
};
