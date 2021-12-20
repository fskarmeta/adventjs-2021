const a5 = `
____*____
___***___
__*****__
_*******_
*********
____#____
____#____
`;

const a3 = `
__*__
_***_
*****
__#__
__#__
`;

const num = 5;

  let i = 1
  let stars = 1
  let string = ''
  while (i <= height) {
    string += '_'.repeat(height - i) + '*'.repeat(stars) + '_'.repeat(height - i) + '\n'
    i++
    stars += 2
  }
  string += '_'.repeat(height - 1) + '#' + '_'.repeat(height - 1) + '\n'
  string += '_'.repeat(height - 1) + '#' + '_'.repeat(height - 1)
  return string
console.log(string);
