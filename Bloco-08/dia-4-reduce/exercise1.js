// 1. Dada uma matriz, transforme em um array.

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
  return arrays.reduce((arr, arr2) => arr.concat(arr2) )
}

console.log(flatten())