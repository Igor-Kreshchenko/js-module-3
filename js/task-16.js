function makeArray(firstArray, secondArray, maxLength) {
  const newArray = firstArray.concat(secondArray);

  if (newArray.length > maxLength) {
    return newArray.slice(0, maxLength);
  }

  return newArray;
}

console.log(makeArray(["Манго", "Поли"], ["Аякс", "Челси"], 3));
console.log(makeArray(["Манго", "Поли", "Хьюстон"], ["Аякс", "Челси"], 4));
