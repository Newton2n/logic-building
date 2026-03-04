function smallestNumber(one, two, three) {
  if (
    typeof one == "number" &&
    typeof two == "number" &&
    typeof three == "number"
  ) {
    if (one < two && one < three) {
      console.log(one, "one is lower");
    } else if (two < one && two < three) {
      console.log(two, "two is lower");
    } else if (three < two && three < one) {
      console.log(three, "three is the lower");
    } else if (one == two && two == three) {
      console.log("All number are same ");
    } else if (one == two) {
      console.log("one and two number are same ");
    } else if (one == three) {
      console.log("one and third number is same ");
    } else if (two == three) {
      console.log("two and three are same");
    }
  } else {
    console.log("ENter a valid number not str");
  }
}

// smallestNumber(1, -1122222, -12233);
// smallestNumber(1, 3, 6);
// smallestNumber(1, -3, -6);
// smallestNumber("-122",-2,0)
// smallestNumber(-12,-2,-120)
// smallestNumber("-122", "-1222", "12");
smallestNumber(2,2,3);
