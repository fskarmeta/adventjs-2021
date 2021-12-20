

function pangram(letter) {
  return new Set(letter.toLowerCase().match(/[a-z\u0080-\uFFFF]/g)).size > 27;
}




console.log(pangram("Extraño pan de col y kiwi se quemó bajo fugaz vaho")); // true
console.log(
  pangram("Jovencillo emponzoñado y con walkman: ¡qué figurota exhibes!")
); // true

console.log(
  pangram(
    "Esto es una frase larga pero no tiene todas las letras del abecedario"
  )
); // false
console.log(pangram("De la a a la z, nos faltan letras")); // false
