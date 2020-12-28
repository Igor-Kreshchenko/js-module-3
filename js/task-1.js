function checkAge(age) {
  if (age >= 18) {
    return "Вы совершеннолетний человек";
  }

  return "Вы не совершеннолетний человек";
}

// function checkAge(age) {
//   let message = "";

//   return (message =
//     age >= 18
//       ? "Вы совершеннолетний человек"
//       : "Вы не совершеннолетний человек");
// }

console.log(checkAge(33));
