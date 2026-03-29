function countWordInSentences(sentence) {
  if (typeof sentence !== "string" || sentence.length < 1) {
    throw new Error("Sorry only string are allowed");
  }
  let wordCount = 1;
  const finalVersion = sentence.trim();

  for (let i = 0; i < finalVersion.length; i++) {
    console.log(finalVersion[i]);
    if (finalVersion[i] === " ") {
      console.log(finalVersion[i]);
      wordCount = wordCount + 1;
    }
  }

  return wordCount;
}

console.log(countWordInSentences("i am newton"));
console.log(countWordInSentences("i am newton bepari"));
console.log(countWordInSentences("i am"));
console.log(countWordInSentences(""));
console.log(countWordInSentences(12));

const countWordInSentences1 = (sentence) => {
  if (typeof sentence !== "string" || sentence.length < 1) {
    throw new Error("Sorry only string are allowed");
  }
  const arrOfWord = sentence.trim().split(/\s+/);
  return arrOfWord.length;
};

console.log(countWordInSentences1("i am newton"));
console.log(countWordInSentences1("i am newton bepari"));
console.log(countWordInSentences1("i am"));
console.log(countWordInSentences1(""));
console.log(countWordInSentences1(12));
