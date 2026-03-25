function isPrimeNumber(number) {
  if (typeof number !== "number" || number < 1) {
    throw new Error("Only number is allowed");
  }
  if (number === 1) return false;
  if (number === 2) return true;
  if (number % 2 === 0) return false;
  let result = true;

  for (let i = 3; i < number; i = i + 2) {
    console.log(i);
    if (number % i === 0) {
      result = false;
      break;
    }
  }
  return result;
}
console.log(isPrimeNumber(8)); //false
console.log(isPrimeNumber(81)); //false
console.log(isPrimeNumber(8)); //false
console.log(isPrimeNumber(9)); //false
console.log(isPrimeNumber(11)); //true
console.log(isPrimeNumber(3)); //true
console.log(isPrimeNumber(2)); //true
console.log(isPrimeNumber(5)); //true
console.log(isPrimeNumber(1)); //false
console.log(isPrimeNumber(1259)); //true
console.log(isPrimeNumber("122")); //Only number is allowed
