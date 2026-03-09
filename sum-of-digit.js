function sumOfDigit(input) {
  if (typeof input !== "number" || input < 1) {
    return "Input only can be integer and positive value";
  }
  let separateDigitArr = Array.from(input.toString());
  let sum = 0;
  separateDigitArr.forEach((number) => (sum += Number(number)));
  return sum;
}

console.log(sumOfDigit(12122));
console.log(sumOfDigit("12122"));
console.log(sumOfDigit(-12122));
console.log(sumOfDigit(0));
console.log(sumOfDigit(100));
console.log(sumOfDigit(99994679));

function sumOfDigit2(input) {
  if (typeof input !== "number" || input < 1) {
    return "Input only can be integer and positive value";
  }
  return Array.from(input.toString()).reduce(
    (prevValue, currentValue) => Number(prevValue) + Number(currentValue),
    0,
  );
}

console.log(sumOfDigit2(12122));
console.log(sumOfDigit2(9989));
console.log(sumOfDigit2("12122"));
console.log(sumOfDigit2(-12122));
console.log(sumOfDigit2(0));
console.log(sumOfDigit2(100));
console.log(sumOfDigit2(99994679));

function sumOfDigit3(input) {
  if (typeof input !== "number" || input < 1) {
    return "Input only can be integer and positive value";
  }
  //   let sum = 0;
  //   input
  //     .toString()
  //     .split("")
  //     .forEach((number) => (sum += Number(number)));
  //   return sum;

  return input
    .toString()
    .split("")
    .reduce((prev, curr) => (prev += Number(curr)), 0); // better approach
}

console.log(sumOfDigit3(12122));
console.log(sumOfDigit3(9989));
console.log(sumOfDigit3("12122"));
console.log(sumOfDigit3(-12122));
console.log(sumOfDigit3(0));
console.log(sumOfDigit3(100));
console.log(sumOfDigit3(99994679));

function sumOfDigit4(input) {
  if (typeof input !== "number" || input < 1) {
    return "Input only can be integer and positive value";
  }
  return Array.from(input.toString()).reduce(
    (prevValue, currentValue) => Number(prevValue) + Number(currentValue),
    0,
  );
}

console.log(sumOfDigit4(12122));
console.log(sumOfDigit4(9989));
console.log(sumOfDigit4("12122"));
console.log(sumOfDigit4(-12122));
console.log(sumOfDigit4(0));
console.log(sumOfDigit4(100));
console.log(sumOfDigit4(99994679));
