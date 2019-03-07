// https://www.codewars.com/kata/all-that-is-open-must-be-closed-dot-dot-dot

const isBalanced = (s, caps) => {
  if (!caps) return true;
  // Get only the open / close keys
  const regex = new RegExp(`(\\${caps.split('').join('|\\')})`, 'g');
  const chars = s.match(regex);
  if (chars === null) return true;
  // If is not even, is already false
  if (chars.length % 2 !== 0) return false;
  const keysAndValues = new Map();
  // Set the Map object (keysAndValues) with the pairs for openKeys and closeKeys, e.g. '()' becomes { '(' => ')' }
  caps.split('').forEach((cap, index) => {
    if (index % 2 === 0) {
      keysAndValues.set(cap, caps[index + 1]);
    }
  });
  // Array to keep record of the last viewed openKey
  const currentOpenKey = [];

  for (let i = 0; i < chars.length; i += 1) {
    // If the current char is an open key, push it to the record
    if (keysAndValues.get(chars[i])) {
      currentOpenKey.push(chars[i]);
    }
    // Else, see if the last recorded open key has a closeKey value equal to the current char inside the loop
    if (chars[i] === keysAndValues.get(currentOpenKey[currentOpenKey.length - 1])) {
      currentOpenKey.pop();
    } else {
      return false;
    }
  }
  return true;
};
