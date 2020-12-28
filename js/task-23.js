function filterArray(numbers, value) {
  let newNumbers = [];

  for (const number of numbers) {
    if (number > value) {
      newNumbers.push(number);
    }
  }

  return newNumbers;
}

console.log(filterArray([1, 2, 3, 4, 5], 3));
