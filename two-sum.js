function twoSum(a, b) {
  if (typeof a === "number" && typeof b === "number") {
    const sum = a + b;
    console.log("Sum is :", sum);
  } else {
    console.log("Number only input");
  }
}

twoSum("apple", "312");
twoSum(-2, "312");
twoSum(true, "312");
twoSum(false, "312");
twoSum(-2, "-312");
twoSum(12, 100);
twoSum(-12, -100);
console.log(typeof 12 === "number");
