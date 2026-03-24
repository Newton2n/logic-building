function countVowelsConsonants(string) {
  let vowel = "aeiou";
  let consonant = "bcdfghjklmnpqrstvwxyz";
  string = string.toLowerCase().replace(/\s/g, ""); // make it lowercase and remove all space
  let vowelNumber = 0;
  let consonantNumber = 0;
  let others = [];
  for (const b of string) {
    if (vowel.includes(b)) {
      vowelNumber++;
    } else if (consonant.includes(b)) {
      consonantNumber++;
    } else {
      others.push(b);
    }
  }
  return {
    vowerNumber: vowelNumber,
    consonantNumber: consonantNumber,
    others: others,
  };
}
console.log(countVowelsConsonants("Newton Bepari")); //{ vowerNumber: 5, consonantNumber: 7, others: [] }
console.log(countVowelsConsonants("Newton Bepari i am 21 year old ")); //{ vowerNumber: 10, consonantNumber: 12, others: [ '2', '1' ] }
