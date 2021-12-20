function listGifts(letter) {
  return letter
    .split(" ")
    .map((l) => l.trim())
    .filter((l) => l && l[0] !== "_")
    .reduce((acc, curr) => {
      return {
        ...acc,
        ...(acc[curr] ? { [curr]: acc[curr] + 1 } : { [curr]: 1 }),
      };
    }, {});
}
