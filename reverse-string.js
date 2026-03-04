//1 st way
function reverseString(string) {
  let arr = [];
  for (let a = 0; a < string.length; a++) {
    arr.push(string[a]);
  }
  let reverse = arr.reverse();
  console.log(reverse);
  return reverse.join("");
}
console.log(reverseString("Newton"));

//2nd way
function reverseString1(string) {
  let result = "";
  for (let a = string.length - 1; a >= 0; a--) {
    result = result + string[a];
  }
  return result;
}
console.log(reverseString1("Newton"));
console.log(reverseString1("Newton Bepari 1"));
console.log(reverseString1("i am web developer "));

// 3 rd way
function reverseString2(string) {
  if (typeof string !== "string") {
    console.log("Only string");
    return "only string";
  } else {
    return string.split("").reverse().join("");
  }
}
console.log(reverseString2("Newton"));
console.log(reverseString2("Newton Bepari 1"));
console.log(reverseString2("i am web developer "));
console.log(reverseString2(11));
// console.log("new"[0])
