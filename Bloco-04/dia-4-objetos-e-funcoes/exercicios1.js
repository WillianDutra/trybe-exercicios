// 1. Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.

let word = "arara";

function reverseString(word) {
  let split = word.split("");
  let reverse = split.reverse();
  let join = reverse.join("");

  let verificaPalindrome = false;

  if (word == join) {
    verificaPalindrome = true;
  } else {
    verificaPalindrome = false;
  }

  console.log(join);
  console.log(verificaPalindrome);
}

reverseString(word);

// 2. Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
// Array de teste: [2, 3, 6, 7, 10, 1];.
// Valor esperado no retorno da função: 4.

let test = [2, 3, 6, 7, 10, 1];
let indice = 0;
let maiorValor = 0;

function maior(test) {
  for (let index = 0; index < test.length; index += 1) {
    if (test[index] > maiorValor) {
      maiorValor = test[index];
      indice = index;
    }
  }
  console.log(indice);
}
maior(test);

// 3. Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
// Array de teste: [2, 4, 6, 7, 10, 0, -3];.
// Valor esperado no retorno da função: 6.

let test1 = [2, 4, 6, 7, 10, 0, -3];
let indice1 = 0;
let menorValor = 0;

function maior(test1) {
  for (let index = 0; index < test1.length; index += 1) {
    if (test1[index] < menorValor) {
      menorValor = test1[index];
      indice1 = index;
    }
  }
  console.log(indice1);
}
maior(test1);

// 4. Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
// Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];.
// Valor esperado no retorno da função: Fernanda.

let nomes = ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"];
let maiorNome = "";

function maiorName(nomes) {
  for (let index = 0; index < nomes.length; index += 1) {
    let split = nomes[index].split("");

    if (split.length > maiorNome.length) {
      maiorNome = nomes[index];
    }
  }

  console.log(maiorNome);
}
maiorName(nomes);

// function maiorName(nomes) {
//   for (let index = 0; index < nomes.length; index += 1) {
//     let split = nomes[index].split("");
//     maior = maiorNome.split("");

//     if (split.length > maior.length) {
//       maiorNome = nomes[index];
//     }
//   }

//   console.log(maiorNome);
// }
// maiorName(nomes);

// 5. Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
// Array de teste: [2, 3, 2, 5, 8, 2, 3];.
// Valor esperado no retorno da função: 2.

let inteiros = [2, 3, 2, 5, 8, 2, 3];

// 6. Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.
// Valor de teste: N = 5.
// Valor esperado no retorno da função: 1+2+3+4+5 = 15.

let natural = 5;
let somatorio = 0;
let soma = [];

function numeroNatural(numero) {
  for (let index = 1; index <= numero; index += 1) {
    soma.push(index);
  }
  for (index in soma) {
    somatorio += soma[index];
  }

  console.log(somatorio);
}
numeroNatural(natural);

// 7. Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word. Considere que a string ending sempre será menor que a string word.
// Valor de teste: 'trybe' e 'be'
// Valor esperado no retorno da função: true
// verificaFimPalavra('trybe', 'be');
// Retorno esperado: true
// verificaFimPalavra('joaofernando', 'fernan');
// Retorno esperado: false

// let word1 = "trybe";
// let ending = "be";
// let retorno1 = false;
// let splitA = [];
// let splitB = [];
// let reverseA = [];
// let reverseB = [];

// function ending1(a, b) {
//   for (let index = 0; index < a.length; index += 1) {
//     splitA.push(a[index]);
//   }
//   reverseA = splitA.reverse();

//   for (let index = 0; index < b.length; index += 1) {
//     splitB.push(b[index]);
//   }
//   reverseB = splitB.reverse();

//   for (let index = 0; index < reverseB.length; index += 1) {
//     if (reverseA[index] === reverseB[index]) {
//       retorno1 = false;
//     } else {
//       retorno1 = true;
//     }
//   }
//   console.log(retorno1, reverseA, reverseB);
// }

// ending1(word1, ending);
