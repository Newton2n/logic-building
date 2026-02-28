function evenOdd(number) {
  return number % 2 === 0 ? "Even number" : "Odd number";
}

console.log(evenOdd(212));
console.log(evenOdd(-211));
console.log(evenOdd(-212));
console.log(evenOdd("-21"));
console.log(evenOdd(0));

function evenOdd(number) {
  switch (true) {
    case number % 2 === 0:
      console.log("number is even");
      break;
    default:
      console.log("number is odd");
  }
}
