//input 2,10
//example 2,10 = 2,4,6,8,10...20

function multiplicationTable(tableOf, tableTill) {
  if (
    typeof tableOf !== "number" ||
    typeof tableTill !== "number" ||
    tableTill < 1
  ) {
    throw new Error("Only number is allowed and positive number allowed in second input ");
  }
  const result = [];
  for (let i = 1; tableTill >= i; i++) {
    result.push(i * tableOf);
  }
  return result;
}

console.log(multiplicationTable(2, 10));
console.log(multiplicationTable(2, 20));
console.log(multiplicationTable(2, 20));
console.log(multiplicationTable(2, -20));
console.log(multiplicationTable("122", "12"));