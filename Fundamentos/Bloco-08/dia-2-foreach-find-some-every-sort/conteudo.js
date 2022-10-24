// 1.1 Use o método forEach chamando a callback showEmailList para apresentar os emails.

const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];

const showEmailList = (email) => {
  console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
};

// Adicione seu código aqui
// emailListInData.forEach(showEmailList);

// 2.1 Utilize o find para retornar o primeiro número do array que é divisível por 3 e 5, caso ele exista:

const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = (number) => number % 3 === 0 && number % 5 === 0;
const findNumber = numbers.find(findDivisibleBy3And5);

console.log(findNumber);

// 2.2 Utilize o find para encontrar o primeiro nome com cinco letras, caso ele exista:

const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = names.find((name) => name.length === 5);

console.log(findNameWithFiveLetters);

// 2.3 Utilize o find para encontrar a música com id igual a 31031685, caso ela exista:

const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
];

// const findMusic = () => musicas.find( (musica) => '31031685' === musica.id);
// console.log(findMusic());

function findMusic(id) {
musicas.find( (music) => music.id === id);
}

console.log(findMusic('31031685'))

// 3.1 Escreva uma função que recebe dois parâmetros: o primeiro um array de nomes e o segundo, um nome qualquer. Essa função deve retornar true se o segundo parâmetro - um nome qualquer - estiver contido no primeiro parâmetro - array de nomes. Caso não esteja contido, deve retornar false. (some)

const names1 = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => arr.some((currentName) => currentName === name);
console.log(hasName(names1, 'Ana'))

// 3.2  Escreva uma função que dado um array de pessoas e uma idade mínima retorne true se todas tiverem a idade maior ou igual a mínima e caso contrário false, use every;

const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const verifyAges = (arr, minimumAge) => arr.every( (currentPeople) => currentPeople.age >= minimumAge );
console.log(verifyAges(people, 18));

// 4.1 Utilize sort para ordenar o array pela idade das pessoas em ordem crescente.

const people1 = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

people1.sort( (people, people2) => people.age - people2.age );

console.log(people1);
