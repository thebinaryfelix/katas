// https://www.codewars.com/kata/create-a-frame

const frame = (stringList, char) => {
  let biggestLength = 0;
  stringList.forEach((word) => {
    if (word.length > biggestLength) {
      biggestLength = word.length;
    }
  });
  const newStringList = stringList.map((word) => {
    let wordRepeated = word;
    wordRepeated = `${char} ${word}${' '.repeat(biggestLength - word.length + 1)}${char}\n`;
    return wordRepeated;
  });
  const frameLimit = biggestLength;
  newStringList.unshift(`${char.repeat(frameLimit + 4)}\n`);
  newStringList.push(`${char.repeat(frameLimit + 4)}`);
  return newStringList.join('');
};
