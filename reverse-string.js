function reverseString(string) {
  let arr = [];
  for (let a = 0; a < string.length; a++) {
    arr.push(string[a]);
  }
  let reverse = arr.reverse();
  console.log(reverse)
  return reverse.join("");
}
console.log(reverseString("Newton"));



function reverseString1(string) {
    let result =""
    for(let a = string.length -1; a >=0;a--){
       result = result + string[a]
    }
    return result
}
console.log(reverseString1("Newton"));
console.log(reverseString1("Newton Bepari 1"));
console.log(reverseString1("i am web developer "));
// console.log("new"[0])
