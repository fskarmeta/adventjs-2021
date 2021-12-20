function countPackages(carriers, carrierID) {
  const carrier = carriers.find((c) => c[0] === carrierID);
  let sum = carrier[1];
  for (const cerrier of carrier[2]) {
    sum += countPackages(carriers, cerrier);
  }
  return sum;
}



const carriers2 = [
  ["lolivier", 8, ["camila", "jesuspoleo"]],
  ["camila", 5, ["sergiomartinez", "conchaasensio"]],
  ["jesuspoleo", 4, []],
  ["sergiomartinez", 4, []],
  ["conchaasensio", 3, ["facundocapua", "faviola"]],
  ["facundocapua", 2, []],
  ["faviola", 1, []],
];

const carriers = [
  ["dapelu", 5, ["midu", "jelowing"]],
  ["midu", 2, []],
  ["jelowing", 2, []],
];

console.log(countPackages(carriers2, "camila")); // 15
console.log(countPackages(carriers, "dapelu")); //9
