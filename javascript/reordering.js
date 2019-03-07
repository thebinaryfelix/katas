// https://www.codewars.com/kata/reordering

const reOrdering = (text) => {
  const textArr = text.split(' ');
  for (let i = 0; i < textArr.length; i += 1) {
    const isUpperCase = textArr[i].match(/[A-Z]/g);
    if (isUpperCase) {
      const insert = textArr.splice(i, 1).join('');
      textArr.unshift(insert);
      return textArr.join(' ');
    }
  }
};
