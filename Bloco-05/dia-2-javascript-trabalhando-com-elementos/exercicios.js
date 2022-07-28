let body = document.querySelector("#body");

function addElements(where, tag, id) {
  let newElement = document.createElement(tag);
  newElement.className = id;

  where.appendChild(newElement);
}

// Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body;
addElements(body, "h1", "title");
document.querySelector(".title").innerText = "Exercício 5.2 - JavaScript DOM";

// Adicione a tag main com a classe main-content como filho da tag body;
addElements(body, "main", "main-content");

// Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;
let main = document.querySelector(".main-content");
addElements(main, "section", "center-content");

// Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;
let section = document.querySelector(".center-content");
addElements(section, "p", "paragraph");
document.querySelector(".paragraph").innerText = "Teste";

// Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;
addElements(main, "section", "left-content");

// Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;
addElements(main, "section", "right-content");

// Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image. Esse elemento deve ser filho do section criado no passo 5;
let leftSection = document.querySelector(".left-content");
addElements(leftSection, "img", "small-image");
document.querySelector(".small-image").src = "https://picsum.photos/200";

// Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um, dois, três, ... como valores da lista. Essa lista deve ser filha do section criado no passo 6;
let rightSection = document.querySelector(".right-content");

addElements(rightSection, "ul", "list");

let list = document.querySelector(".list");

let numbers = [
  "um",
  "dois",
  "tres",
  "quatro",
  "cinco",
  "seis",
  "sete",
  "oito",
  "nove",
  "dez",
];

for (let index = 0; index < numbers.length; index += 1) {
  let numberWrite = numbers[index];

  let numbersList = document.createElement("li");
  numbersList.className = "numbers-list";
  numbersList.innerText = numberWrite;

  list.appendChild(numbersList);
}

// Adicione 3 tags h3, todas sendo filhas do main criado no passo 2.
addElements(main, "h3", "description");
addElements(main, "h3", "description");
addElements(main, "h3", "description");

// Agora que você criou muita coisa, vamos fazer algumas alterações e remoções:
// Adicione a classe title na tag h1 criada;
// feito anteriormente (linha 11)

// Adicione a classe description nas 3 tags h3 criadas;
// feito anteriormente (linha 67-69)

// Remova a section criado no passo 5 (aquele que possui a classe left-content). Utilize a função .removeChild();
document
  .querySelector(".main-content")
  .removeChild(document.querySelector(".left-content"));

// Centralize a section criado no passo 6 (aquele que possui a classe right-content). Dica: para centralizar, basta configurar o margin-right: auto da section;
document.querySelector(".right-content").style.marginRight = "auto";

// Troque a cor de fundo do elemento pai da section criada no passo 3 (aquela que possui a classe center-content) para a cor verde;
document.querySelector(".center-content").style.backgroundColor = "green";

// Remova os dois últimos elementos (nove e dez) da lista criada no passo 8.
document.getElementsByClassName("numbers-list")[9].remove();
document.getElementsByClassName("numbers-list")[8].remove();
