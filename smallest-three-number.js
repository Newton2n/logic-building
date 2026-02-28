function smallestNumber(one, two, three) {
  if (one < two && one < three) {
    console.log(one, "one is lower");
  } else if (two < one && two < three) {
    console.log(two, "two is lower");
  } else if (three < two && three < one) {
    console.log(three, "three is the lower");
  }
}

smallestNumber(1, -1122222, -12233);
smallestNumber(1, 3, 6);
smallestNumber(1, -3, -6);
smallestNumber("-122",-2,0)
smallestNumber(-12,-2,-120)