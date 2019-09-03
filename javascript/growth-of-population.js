const nbYear = (p0, percent, aug, p) => {
  let currentPopulation = p0
  let years = 0
  while (currentPopulation < p) {
    console.log(currentPopulation, percent, aug, p)
    currentPopulation += (currentPopulation * percent / 100) + aug
    years += 1
  }
  return years
}

console.log(nbYear(1500000, 0, 10000, 2000000))
