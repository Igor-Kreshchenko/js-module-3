function checkStorage(available, ordered) {
  if (ordered === 0) {
    return "В заказе ещё нет товаров";
  }

  if (ordered > available) {
    return "Слишком большой заказ, на складе недостаточно товаров!";
  }

  return "Заказ оформлен, с вами свяжется менеджер!";
}

console.log(checkStorage(20, 10));
console.log(checkStorage(20, 0));
console.log(checkStorage(20, 30));
