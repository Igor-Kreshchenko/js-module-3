function calculateEngravingPrice(message, pricePerWord) {
  const words = message.split(" ");
  const totalPrice = words.length * pricePerWord;

  return totalPrice;
}

console.log(calculateEngravingPrice("JavaScript у меня в крови", 10));
console.log(calculateEngravingPrice("JavaScript у меня в крови", 20));
