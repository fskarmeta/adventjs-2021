function getMinJump(obstacles) {
  obstacles = obstacles.sort((a, b) => a - b);
  const arrLen = obstacles[obstacles.length - 1];
  let count = 1;
  let jump = 1;
  while (count <= arrLen) {
    if (obstacles.includes(count)) {
      count = 0;
      jump++;
    }
    count += jump;
  }
  return jump;
}

// console.log(getMinJump([5, 3, 6, 7, 9])); // -> 4
console.log(getMinJump([2, 4, 6, 8, 10])); // -> 7
// console.log(getMinJump([1, 2, 3, 5])); // -> 4
// console.log(getMinJump([3, 7, 5])); // -> 2
// console.log(getMinJump([9, 5, 1])); // -> 2
