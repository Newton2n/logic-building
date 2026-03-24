function isPalindrome(input) {
  if (typeof input !== "string") {
    throw new Error("Only string are allowed ");
  }

  const reverseString = input.toLowerCase().split("").reverse().join(""); //by string and array method
  //   const reverseString = Array.from(input).reverse().join(""); //By all array method

  return input === reverseString ? true : false;
}

console.log(isPalindrome("Newton"));
console.log(isPalindrome("madam"));
console.log(isPalindrome("newton"));
console.log(isPalindrome("mousumi"));
console.log(isPalindrome("11122111"));


