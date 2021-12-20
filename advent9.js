function groupBy(collection, it) {
  if (typeof it === "function") {
    return collection.reduce(
      (acc, cur) => ({
        ...acc,
        ...{ [it(cur)]: [...(acc[it(cur)] || []), cur] },
      }),
      {}
    );
  }
  if (typeof it === "string") {
    return collection.reduce(
      (acc, cur) => ({
        ...acc,
        ...{ [cur[it]]: [...(acc[cur[it]] || []), cur] },
      }),
      {}
    );
  }
}

console.log(groupBy([6.1, 4.2, 6.3], Math.floor)); // { 6: [6.1, 6.3], 4: [4.2] }
console.log(groupBy(["one", "two", "three"], "length")); // { 3: ['one', 'two'], 5: ['three'] }
console.log(groupBy([{ age: 23 }, { age: 24 }], "age")); // { 23: [{age: 23}], 24: [{age: 24}] }
