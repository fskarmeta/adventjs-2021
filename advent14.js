function missingReindeer(ids) {
  const len = ids.length + 1;
  const numsSum = ids.reduce((a, b) => a + b);
  const expected = (len * (len - 1)) / 2;
  return expected - numsSum;
}
// console.time("missingReindeer");
// console.log(missingReindeer([5, 6, 1, 2, 3, 7, 0])); // 4
// console.log(missingReindeer([0, 1])); // 2
// console.log(missingReindeer([9, 2, 3, 5, 6, 4, 7, 0, 1])); // 8
// console.timeEnd("missingReindeer");
