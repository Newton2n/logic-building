function rectangleAreaCalculator(length, width) {
  if (length > 0 && width > 0) {
    return length * width;
  } else {
    throw new RangeError("sorry ony positive number")
  }
}

console.log(rectangleAreaCalculator(2, 4));
console.log(rectangleAreaCalculator(2, "8"));
console.log(rectangleAreaCalculator(-12, -12));
console.log(rectangleAreaCalculator(-2, "8"));
