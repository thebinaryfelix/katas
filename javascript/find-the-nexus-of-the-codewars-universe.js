// https://www.codewars.com/kata/find-the-nexus-of-the-codewars-universe

const nexus = (users) => {
  const userKeys = Object.keys(users);
  let nexusKey = '';
  let nexusValue;
  userKeys.forEach((key, idx) => {
    const parsedKey = parseInt(key, 10);
    const userComputedValue = Math.abs(parsedKey - users[key]);
    if (idx === 0) {
      nexusValue = userComputedValue;
      nexusKey = key;
    } else if (userComputedValue < nexusValue) {
      nexusValue = userComputedValue;
      nexusKey = key;
    } else if (userComputedValue === nexusValue) {
      if (parseInt(key, 10) < parseInt(nexusKey, 10)) {
        nexusKey = key;
      }
    }
  });
  return parseInt(nexusKey, 10);
};

console.log(nexus({ 1: 3, 3: 3, 5: 3 }));
