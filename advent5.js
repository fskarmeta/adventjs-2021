function dateDiffInDays(a) {
  const christmas = new Date("Dec 25, 2021");
  const dateUTC = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  const christmasUTC = Date.UTC(
    christmas.getFullYear(),
    christmas.getMonth(),
    christmas.getDate()
  );

  return Math.floor((christmasUTC - dateUTC) / (1000 * 60 * 60 * 24));
}

console.log(dateDiffInDays(new Date("Dec 23, 2021")));
