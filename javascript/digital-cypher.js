// https://www.codewars.com/kata/digital-cypher

const encode = (str, n) => {
  const num = n.toString();
  const encoded = [];
  const letterCode = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26
  };
  let j = 0;
  for (let i = 0; i < str.length; i += 1) {
    if (j === num.length) j = 0;
    encoded.push(letterCode[str[i]] + parseInt(num[j], 10));
    j += 1;
  }
  return encoded;
};
