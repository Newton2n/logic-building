function calculateSimpleInterest(
  principalAmount,
  interestRateYearly,
  durationInYears,
) {
  let multiplicationResult =
    principalAmount * interestRateYearly * durationInYears;
  let simpleInterest = multiplicationResult / 100;
  simpleInterest = simpleInterest.toFixed(2);
  return simpleInterest;
}

console.log("1000, 5, 1", calculateSimpleInterest(1000, 5, 1)); //[ '1000, 5, 1', '50.00' ]
console.log("20000, 10, 5", calculateSimpleInterest(20000, 10, 5)); //[ '20000, 10, 5', '10000.00' ]

console.log("20000, 8.755, 5", calculateSimpleInterest(20000, 8.755, 5)); //[ '20000, 8.755, 5', '8755.00' ]
console.log("20000.88, 8.755, 5", calculateSimpleInterest(20000.88, 8.755, 5)) //[ '20000.88, 8.755, 5', '8755.39' ]
