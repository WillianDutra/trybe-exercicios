function hydrate(string) {
  let num = /\d/g; 
  // https://stackoverflow.com/questions/1623221/how-to-find-a-number-in-a-string-using-javascript
  let numbers = string.match(num);
  let result;
  let soma = 0;

  for (let index in numbers) {
    soma += parseFloat(numbers[index]);
  }

  if (soma > 1) {
    result = soma + ' copos de água';
  } else {
    result = soma + ' copo de água';
  }
  return result;
}

module.exports = hydrate;