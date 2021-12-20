function shouldBuyFidelity(times) {
  let cartPrice = 250;
  let singleTicket = 12;
  const totalWithoutCart = times * singleTicket;
  if (totalWithoutCart < cartPrice) return false;
  let isItWorth = false;
  for (let i = 0; i < times - 1; i++) {
    singleTicket *= 0.75;
    cartPrice += singleTicket;
    totalWithoutCart > cartPrice ? (isItWorth = true) : (isItWorth = false);
  }
  return isItWorth;
}


console.log(shouldBuyFidelity(22));
