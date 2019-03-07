// https://www.codewars.com/kata/buying-a-car

const nbMonths = (startPriceOld, startPriceNew, savingperMonth, percentLossByMonth) => {
  let percentLoss = percentLossByMonth;
  let currentSavedValue = startPriceOld;
  let updatedPriceOld = startPriceOld;
  let updatedPriceNew = startPriceNew;
  let monthsPassed = 0;

  while (currentSavedValue < updatedPriceNew) {
    monthsPassed += 1;
    if (monthsPassed % 2 === 0) {
      percentLoss += 0.5;
    }
    updatedPriceOld -= updatedPriceOld * (percentLoss / 100);
    updatedPriceNew -= updatedPriceNew * (percentLoss / 100);
    currentSavedValue = updatedPriceOld + savingperMonth * monthsPassed;
  }
  return [monthsPassed, Math.round(currentSavedValue - updatedPriceNew)];
};

// Test case
console.log(nbMonths(2000, 8000, 1000, 1.5)); // => [6, 766]
