function wrapGifts(gifts) {
  const wrappedGifts = [];
  const wrapper = "*".repeat(gifts[0].length + 2);
  gifts.forEach((e, i) => {
    if (i == 0) wrappedGifts.push(wrapper);
    wrappedGifts.push("*" + e + "*");
    if (i == gifts.length - 1) wrappedGifts.push(wrapper);
  });
  return wrappedGifts;
}




console.log(wrapGifts(["📷", "⚽️"]));
console.log(wrapGifts(["🏈🎸", "🎮🧸"]));
console.log(wrapGifts(["📷"]));
console.log(wrapGifts(["🏈🎸📷", "🎮🧸📷"]));
