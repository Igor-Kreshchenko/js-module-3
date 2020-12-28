function splitMessage(message, delimeter) {
  let words = message.split(delimeter);

  return words;
}

console.log(splitMessage("Манго спешит на поезд", " "));
console.log(splitMessage("Манго", ""));
