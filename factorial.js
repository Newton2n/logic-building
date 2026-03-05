function factorialCalculator(number) {
  if (typeof number !== "number" || number < 0) {
   throw new Error( "input only can be positive and only string")
  }
  let factorial = 1n; // n for no losing precision
  for (let i = 1; i <= number; i++) {
    console.log(i);
    factorial = factorial * BigInt(i);
  }

  return factorial.toString();
}

console.log(factorialCalculator(10));
console.log(factorialCalculator(0));
console.log(factorialCalculator(110));
console.log(factorialCalculator(-10));

