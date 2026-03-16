function findFactor(input) {
  if (input < 1 || typeof input !== "number") {
    throw new Error("Input should be number and positive number");
  }
  let factorNumber = [];
  for (let i = 1; i <= input; i++) {
    if (input % i === 0) {
      factorNumber.push(i);
    }
  }
  return factorNumber;
}

console.log(findFactor(4)); //[ 1, 2, 4 ]
console.log(findFactor(12)); //Array(6) [ 1, 2, 3, 4, 6, 12 ]
console.log(findFactor(14)); // [ 1, 2, 7, 14 ]
console.log(findFactor(35)); //[ 1, 5, 7, 35 ]
console.log(findFactor("New")); //Input should be number and positive number
console.log(findFactor(-35)); //Input should be number and positive number
