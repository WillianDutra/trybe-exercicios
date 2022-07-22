// O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo:

// O fatorial é representado pelo sinal !
// 4! = 4 x 3 x 2 x 1 = 24

// 1- Com base nessas informações, crie um algoritmo que retorne o fatorial de 10.

let fatorial = 10;
let resultado = fatorial;

for (let index = 1; index < fatorial; index += 1) {
  resultado *= index;
}
console.log(resultado);

// 2- Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.

let word = "tryber";

let wordInverted = "";

for (let index = 0; index < word.length; index += 1) {
  wordInverted = word[index] + wordInverted;
}
console.log(wordInverted);

// 3- Considere o array de strings abaixo:

let array = ["java", "javascript", "python", "html", "css"];

// Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.
let maior = "";
let menor = "------------------";

for (let index = 0; index < array.length; index += 1) {
  let arrayWord = array[index];

  if (arrayWord.length > maior.length) {
    maior = arrayWord;
  } else if (arrayWord.length < menor.length) {
    menor = arrayWord;
  }
}
console.log(maior);
console.log(menor);

// 4- Um número primo é um número inteiro maior do que 1 que possui somente dois divisores, ou seja, é divisível por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 2 e 50.

let hNumber = 0;

for (let nSelected = 2; nSelected <= 50; nSelected += 1) {
  let prime = true;
  for (let nDivisor = 2; nDivisor < nSelected; nDivisor += 1) {
    if (nSelected % nDivisor === 0) {
      prime = false;
    }
  }
  if (prime) {
    hNumber = nSelected;
  }
}

console.log(hNumber);
