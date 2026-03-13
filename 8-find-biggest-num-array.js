function biggestNumInArray(arrOfNumber) {
  if (!arrOfNumber || arrOfNumber.length < 2) {
    throw new Error("Array length should be more than one");
  }
  console.log(arrOfNumber);
  let biggestNumber = arrOfNumber[0];
  for (let i = 1; i < arrOfNumber.length; i++) {
    if (
      typeof arrOfNumber[0] !== "number" ||
      typeof arrOfNumber[i] !== "number"
    ) {
      throw new Error("Input should only be number");
    }
    if (arrOfNumber[i] > biggestNumber) {
      biggestNumber = arrOfNumber[i];
    }
    console.log(arrOfNumber[i]);
  }
  return biggestNumber;
}

console.log(biggestNumInArray([1, 3, 4, 5, 6, 6]));
console.log(biggestNumInArray([17, 3, 4, 5, 6, 6]));
console.log(biggestNumInArray(["122", 1212]));

function biggestNumInArray2(arrOfNumber) {
  maxNumber = Math.max(...arrOfNumber); //in build method
  return maxNumber;
}

console.log(biggestNumInArray2([1, 3, 4, 5, 6, 6]));
console.log(biggestNumInArray2([17, 3, 4, 5, 6, 6]));
console.log(biggestNumInArray2([112, 1212,0,12121]));
