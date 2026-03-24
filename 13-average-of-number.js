function averageNumber(arrOfNumber) {
  if (arrOfNumber.length === 0) return 0;
  const sumOfNumber = arrOfNumber.reduce((total, item) => {
    if (typeof item !== "number" || item < 1) {
      throw new Error("Array item only can be number and positive number");
    }
    return total + item;
  }, 0);
  return sumOfNumber / arrOfNumber.length;
}

console.log(averageNumber([12, 12, 1]));
console.log(averageNumber([12, 122, 121]));
console.log(averageNumber([12, 212, 312]));
console.log(averageNumber([12]));
console.log(averageNumber([12, 212, "122"]));
