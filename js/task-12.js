function makeStringFromArray(array, delimeter) {
  let string = "";

  const joinedArray = array.join(delimeter);
  string += joinedArray;

  return string;
}

console.log(makeStringFromArray(["Манго", "спешит", "на", "поезд"], " "));
console.log(makeStringFromArray(["М", "а", "н", "г", "о"], ""));
