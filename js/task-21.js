function findLongestWord(string) {
  const array = string.split(" ");
  let longestWord = array[0];

  for (let i = 1; i < array.length; i += 1) {
    if (array[i].length > longestWord.length) {
      longestWord = array[i];
    }
  }

  return longestWord;
}

console.log(findLongestWord("The quick brown fox  jumped over the lazy dog"));
