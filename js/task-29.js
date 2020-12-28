function getEvenNumbers(start, end) {
  let evenNumbers = [];

  for (let i = start; i <= end; i += 1) {
    if (i % 2 === 0) {
      evenNumbers.push(i);
    }
  }

  return evenNumbers;
}

console.log(getEvenNumbers(3, 11));
