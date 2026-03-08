function isLeapYear(year) {
  if (typeof year !== "number" || year < 1) {
    return "Year should in string and positive number";
  }

  return year % 4 === 0 ? true : false;
}
console.log(isLeapYear(2064));
console.log(isLeapYear(-2064));
console.log(isLeapYear("2064"));
console.log(isLeapYear("-2064"));
console.log(isLeapYear(3));
