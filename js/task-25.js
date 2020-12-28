function getCommonElements(array1, array2) {
  let array3 = [];

  for (const item of array1) {
    if (array2.includes(item)) {
      array3.push(item);
    }
  }

  return array3;
}

console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
