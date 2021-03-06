function canReconfigure(from, to) {
  if (from.length !== to.length) return false;
  const a = new Set(from.split(""));
  const b = new Set(to.split(""));
  return a.size === b.size;
}

let from = "BAL";
let to = "LIB";
console.log(canReconfigure(from, to)); // true
/* la transformación sería así:
B -> L
A -> I
L -> B
*/

from = "CON";
to = "JUU";
console.log(canReconfigure(from, to)); // false
/* no se puede hacer la transformación:
C -> J
O -> U
N -> FALLO
*/

from = "MMM";
to = "MID";
console.log(canReconfigure(from, to)); // false
/* no se puede hacer la transformación:
M -> M (BIEN, asigna el mismo carácter a si mismo)
M -> I (FALLO, asigna el mismo carácter a dos letras distintas)
M -> D (FALLO, asigna el mismo carácter a dos letras distintas)
*/

from = "AA";
to = "MID";
console.log(canReconfigure(from, to)); // false -> no tiene la misma longitud
