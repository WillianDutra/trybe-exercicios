// Iremos utilizar esse array para realizar os exercícios do 1 ao 7:

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// 1.Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log();

console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);
console.log(numbers[3]);
console.log(numbers[4]);
console.log(numbers[5]);
console.log(numbers[6]);
console.log(numbers[7]);
console.log(numbers[8]);
console.log(numbers[9]);

// 2.Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;

// prettier - ignore;
let soma = 0;
for (let index = 0; index < numbers.length; index += 1) {
  soma += numbers[index];
}

console.log(soma);

// 3.Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

let soma1 = 0;
for (let index = 0; index < numbers.length; index += 1) {
  soma1 += numbers[index];
}

let media = soma1 / numbers.length;

console.log(media);

// 4.Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

if (media > 20) {
  console.log("Valor maior que 20");
} else {
  console.log("Valor menor ou igual que 20");
}

// *5.Utilizando for, descubra qual o maior valor contido no array e imprima-o;*

let maior = 0;
// let higherNumber = numbers[0];

for (let index = 0; index < numbers.length; index += 1) {
  let numberSelectec = numbers[index];

  if (numberSelectec > maior) {
    maior = numberSelectec;
  }
}

console.log(maior);

// 6.Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let impares = 0;
let pares = 0;

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 2 != 0) {
    impares = impares + 1;
  } else if (numbers[index] % 2 == 0) {
    pares = pares + 1;
  }
}

console.log(impares);
console.log(pares);

// 7.Utilizando for, descubra qual o menor valor contido no array e imprima-o;

let menor = 100;
// let menor = Math.min(...numbers);

for (let index = 0; index < numbers.length; index += 1) {
  let numberSelectec = numbers[index];

  if (numberSelectec < menor) {
    menor = numberSelectec;
  }
}

console.log(menor);

// 8.Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;

let num = [];

for (let index = 1; index <= 25; index += 1) {
  num.push(index);
}
console.log(num);

// 9.Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.

for (let index = 0; index < num.length; index += 1) {
  console.log(num[index] / 2);
}
