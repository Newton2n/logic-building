function exponentCalculator(base, exponent) {
  //validation for number input
  //calculate  Exponent
  let result = 1;
  for (let i = 0; i < exponent; i++) {
    result *= base;
  }
  return result;
}

console.log(exponentCalculator(2, 5));
console.log(exponentCalculator(5, 4));
