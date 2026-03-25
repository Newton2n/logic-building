function isPrimeNumber(number) {
  if (typeof number !== "number" || number < 1) {
    throw new Error("Only positive number is allowed");
  }
  if (number === 1) return false;
  if (number === 2) return true;
  if (number % 2 === 0) return false;
  let result = true;

  for (let i = 3; i < number; i = i + 2) {;
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
// console.log(isPrimeNumber("122")); //Only number is allowed

function isPrimeNumber2(number) {
  if (typeof number !== "number" || number < 1) {
    throw new Error("Only positive number is allowed");
  }
  if (number === 1) return false;
  if (number === 2) return true;
  if (number % 2 === 0) return false;
  let result = true;
  const limit  = Math.sqrt(number)
  for (let i = 3; i <= limit; i = i + 2) {
    if (number % i === 0) {
      result = false;
      break;
    }
  }
  return result;
}
console.log(isPrimeNumber2(8)); //false
console.log(isPrimeNumber2(81)); //false
console.log(isPrimeNumber2(8)); //false
console.log(isPrimeNumber2(9)); //false
console.log(isPrimeNumber2(11)); //true
console.log(isPrimeNumber2(3)); //true
console.log(isPrimeNumber2(2)); //true
console.log(isPrimeNumber2(5)); //true
console.log(isPrimeNumber2(1)); //false
console.log(isPrimeNumber2(1259)); //true
console.log(isPrimeNumber2("122")); //Only number is allowed
