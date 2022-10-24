// 1. Altere o tipo das variáveis(var) para let ou const para que respeitem o escopo em que foram declaradas, e altere a função utilizando arrow function e template literals.
// Modifique a estrutura da função para que ela seja uma arrow function;
// Modifique as variáveis para que respeitem o escopo onde estão declaradas;
// Modifique as concatenações para template literals.


const testingScope = (escopo) => {
  if (escopo === true) {
    var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = (`${ifScope} ótimo, fui utilizada no escopo !`);
    console.log(ifScope);
  } else {
    let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
  // console.log(`${ifScope} o que estou fazendo aqui ? :O`); // Se necessário esta linha pode ser removida.
}

testingScope(true);

// 2. Crie uma função que retorne um array em ordem crescente.

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortOddsAndEvens = (array) => {
  for (let index = 1; index < array.length; index += 1){
    for (let index2 = 0; index2 < index; index2 += 1){
      if (array[index] < array[index2]){
        let position = array[index];
        array[index] = array[index2];
        array[index2] = position;
      }
    }
  }

  return array
};

sortOddsAndEvens(oddsAndEvens);
console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente!`);

// Parte 2
// 1. Crie uma função que receba um número e retorne seu fatorial.

const factorial = (number) =>{
  let result = number;
  for (let index = 1; index < number; index += 1){
    result = result * index;
  }
  return console.log(`${result} é o fatorial de ${number}!`);
}

factorial(8);

// 2. Crie uma função que receba uma frase como parâmetro e retorne a maior palavra da frase.

const longestWord = (frase) => {
  let words = frase.split(' ')
  let longest = 'a';
    for (let index = 0; index < words.length; index += 1){
      if (words[index].length > longest.length){
        longest = words[index]
      }
    }
  return console.log(longest)
}

longestWord('Antônio foi no banheiro e não sabemos o que aconteceu');

// 3. Crie uma página HTML que possua um contador de cliques.

const clickBtn = document.querySelector('#btn');
const clickCount = document.querySelector('#click-count')
let clicks = 0;

clickBtn.addEventListener('click', () => {
  clicks += 1;
  clickCount.innerHTML = clicks;
})

// 4. Crie duas funções JavaScript com as seguintes especificações:
// Função 1: Escreva uma função que substitua a letra 'x' em uma frase.

const substituaX = (nome) => {
  const frase = 'Tryber x aqui!';
  const fraseSplit = frase.split('x');

  return console.log(`${fraseSplit[0] + nome + fraseSplit[1]}`)
}

substituaX('Bebeto');

// Função 2: Escreva uma função que irá receber o retorno da Função 1 por parâmetro e retornará uma nova string.

