function getExtremeElements(array) {
  const firstElement = array[0];
  const lastElement = array[array.length - 1];

  const newArray = [firstElement, lastElement];

  return newArray;
}

console.log(getExtremeElements([1, 2, 3, 4, 5]));
console.log(getExtremeElements(["Земля", "Марс", "Венера"]));
