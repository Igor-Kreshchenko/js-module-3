function filterArray(numbers, value) {
  // Пиши код ниже этой строки
  const filteredNumbers = [];

  for (const item of numbers) {
    const number = item;

    if (number > value) {
      filteredNumbers.push(number);
    }
  }

  return filteredNumbers;
  // Пиши код выше этой строки
}
