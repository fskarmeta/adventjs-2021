const charDic = {
  "(": ")",
  "[": "]",
  "{": "}",
  ")": "(",
  "]": "[",
  "}": "{",
};

export default function isValid(letter) {
  let valid = true;
  let spaces = 0;
  let nextExpectedChar;
  for (const char of letter.split("")) {
    if (Object.keys(charDic).includes(char)) {
      if (valid) {
        nextExpectedChar = charDic[char];
        spaces = 0;
        valid = false;
      } else {
        valid = nextExpectedChar === char && spaces > 1;
        spaces = 0;
        if (!valid) break;
      }
    }
    spaces++;
  }
  return valid;
}

console.log(isValid("bici coche (balón) bici coche peluche"), true);
console.log(isValid("(muñeca) consola bici"), true);
console.log(isValid("bici coche (balón bici coche"), false);
console.log(isValid("peluche (bici [coche) bici coche balón"), false);
console.log(isValid("(peluche {) bici"), false);
console.log(isValid("(() bici"), false);
