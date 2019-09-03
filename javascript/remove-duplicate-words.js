const removeDuplicateWords = sentence => {
  const singleWords = []
  sentence.split(' ').forEach(word => {
    if (!singleWords.includes(word)) {
      singleWords.push(word)
    }
  })
  return singleWords.join(' ')
}

console.log(
  removeDuplicateWords(
    "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"
  )
);
