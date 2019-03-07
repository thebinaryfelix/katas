// https://www.codewars.com/kata/advanced-pig-latin

const translate = (sentence) => {
  // Extract words and punctuation to an array
  const sentenceWords = sentence.match(/(\w+)|(\W)/g);
  // Iterate over each word in the original array
  const newSentenceWords = sentenceWords.map((word) => {
    let countVogal = 0;
    let countConsonants = 0;
    // Check if element is really a word and not punctuation
    if (word[0].match(/\w/g)) {
      // Split characters
      word = word.split('');
      // Iterate over each character
      word.forEach((char) => {
        // If the character is not a vogal
        if (!char.match(/([aeiou])|([AEIOU])/g) && countVogal === 0) {
          // Push the char to the end of the array
          word.push(char.toLowerCase());
          countConsonants += 1;
        } else {
          countVogal += 1;
        }
      });
      word = word.map((char, i) => {
        const charExists = word[i - countConsonants] !== undefined;
        const charIsUpperCase = charExists
          ? word[i - countConsonants] === word[i - countConsonants].toUpperCase()
          : false;
        return charExists && charIsUpperCase ? char.toUpperCase() : char;
      });
      word.splice(0, countConsonants);
      word = word.join('');
      word += countConsonants !== 0 ? 'ay' : 'way';
    }
    return word;
  });
  return newSentenceWords.join('');
};
