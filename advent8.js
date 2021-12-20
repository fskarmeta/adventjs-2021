const maxProfit = (prices) => {
  const purchase = prices.slice(0, prices.length / 2);
  const min = Math.min(...purchase);
  const sale = prices.slice(prices.length / 2, prices.length);
  const max = Math.max(...sale);
  return max <= min ? -1 : [max, min];
};


const prices = [39, 18, 29, 25, 34, 5, 32];
console.log(maxProfit(prices));