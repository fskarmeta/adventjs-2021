function sumPairs(numbers, result) {
  const loadedNumbs = new Map();
  store = [];
  for (const i in numbers) {
    if (loadedNumbs.has(numbers[i])) {
      store.push([loadedNumbs.get(numbers[i]), numbers[i]]);
    }

    loadedNumbs.set(result - numbers[i], numbers[i]);
  }
  return store.length
    ? store.sort((a, b) => +numbers.indexOf(a[0]) - +numbers.indexOf(b[0]))[0]
    : null;
}

console.log(sumPairs([3, 5, 7, 2], 10)); // [3, 7]
console.log(sumPairs([-3, -2, 7, -5], 10)); // null
console.log(sumPairs([2, 2, 3, 1], 4)); // [2, 2]
console.log(sumPairs([6, 7, 1, 2], 8)); // [6, 2]
console.log(sumPairs([1, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 3], 4)); // [1,3]
console.log(sumPairs([0, 2, 2, 3, -1, 1, 5], 6)); // [1, 5]
console.log(sumPairs([1, 3, 8, 10, 12, 14], 11)); // [1,10]