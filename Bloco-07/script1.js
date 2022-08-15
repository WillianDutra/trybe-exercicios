const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// 1. Crie uma função para adicionar o turno da noite na lesson2. Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.

const addKey = (obj, key, value) => obj[key] = value;
addKey(lesson2, 'turno', 'noite')
// console.log(lesson2)

// 2. Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

const keyList = (obj) => Object.keys(obj);
// console.log(keyList(lesson2));

// 3. Crie uma função para mostrar o tamanho de um objeto. Essa função deve receber um objeto como parâmetro.

const objSize = (obj) => Object.keys(obj).length;
console.log(objSize(lesson2));

// 4. Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

const objValues = (obj) => Object.values(obj);
console.log(objValues(lesson1));

// 5. Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign. Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1, lesson2 e lesson3. Ao executar o comando console.log(allLessons):

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
console.log(allLessons);

// 6. Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.

const allStudents = (obj) => {
  let total = 0;
  const array = Object.keys(obj);
  
  for (index in array){
    total += obj[array[index]].numeroEstudantes;
  }
  return total;
}

console.log(allStudents(allLessons));

// 7. Crie uma função que obtenha o valor da chave de acordo com o seu índice no objeto.

const objValue = (obj, num) => Object.values(obj)[num];
console.log(objValue(lesson2, 2))

// 8. Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave.

const verify = (obj, key, value) => {
  const array = Object.entries(obj);
  let equal = false;

  for (let index in array){
    if (array[index][0] === key && array[index][1] === value){
      equal = true;
    }
  }
  return equal;
}
console.log(verify(lesson1, 'turno', 'manhã'))