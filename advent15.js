function checkSledJump(heights) {
  let heighest = 0;
  let latest = -Infinity;
  let switched = false;
  for (const num of heights) {
    if (num === latest || (switched && num >= latest)) return false;
    if (num > heighest) heighest = num;
    if (num < heighest && !switched) switched = true;
    latest = num;
  }
  if (!switched) return false;
  return true;
}

console.log(checkSledJump([1, 2, 3, 2, 1])); // true: sube y baja de forma estricta
console.log(checkSledJump([0, 1, 0])); // -> true: sube y baja de forma estricta
console.log(checkSledJump([0, 3, 2, 1])); // -> true: sube y baja de forma estricta
console.log(checkSledJump([0, 1000, 1])); // -> true: sube y baja de forma estricta
console.log(checkSledJump([2, 4, 4, 6, 2])); // false: no sube de forma estricta
console.log(checkSledJump([1, 2, 3])); // false: sólo sube
console.log(checkSledJump([1, 2, 3, 2, 1, 2, 3])); // false: sube y baja y sube... ¡no vale!
