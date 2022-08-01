function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

// Escreva seu código abaixo.

let ulDays = document.querySelector("#days");

// Os dias devem estar contidos em uma tag <li>, e todos devem ter a classe day.

let decemberDaysList = [
  29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];

// Os dias 24, 25 e 31 são feriados e, além da classe day, devem conter também a classe holiday.
// Os dias 4, 11, 18 e 25 são sextas-feiras. Eles devem conter a classe day e a classe friday.

function liCreate() {
  for (let index = 0; index < decemberDaysList.length; index += 1) {
    let element = document.createElement("li");
    element.innerText = decemberDaysList[index];

    if (element.innerText == 24 || element.innerText == 31) {
      element.className = "day holiday";
    } else if (
      element.innerText == 4 ||
      element.innerText == 11 ||
      element.innerText == 18
    ) {
      element.className = "day friday";
    } else if (element.innerText == 25) {
      element.className = "day friday holiday";
    } else {
      element.className = "day";
    }

    ulDays.appendChild(element);
  }
}
liCreate();

// 2. Implemente uma função que crie dinamicamente um botão com o nome "Feriados"
// Sua função deve receber um parâmetro com a string 'Feriados'
// Adicione a este botão a ID "btn-holiday"
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container"

let buttonsContainer = document.querySelector(".buttons-container");

function buttonFeriados() {
  let button = document.createElement("button");
  button.innerText = "Feriados";
  button.id = "btn-holiday";

  buttonsContainer.appendChild(button);
}
buttonFeriados();

// 3. Implemente uma função que muda a cor de fundo dos dias que possuem a classe "holiday"
// Adicione ao botão "Feriados" um evento de "click" que altere a cor de fundo dos dias que possuem a classe "holiday"

let btnHoliday = document.querySelector("#btn-holiday");
let dayHoliday = document.getElementsByClassName("holiday");

let holiday1 = document.getElementsByClassName("holiday")[0];
let holiday2 = document.getElementsByClassName("holiday")[1];
let holiday3 = document.getElementsByClassName("holiday")[2];

btnHoliday.addEventListener("click", changeBackground);

function changeBackground(dayHoliday) {
  holiday1.style.backgroundColor = "#363636";
  holiday2.style.backgroundColor = "#363636";
  holiday3.style.backgroundColor = "#363636";
}

// 4. Implemente uma função que crie dinamicamente um botão com o nome "Sexta-feira". Sua função deve receber como parâmetro a string "Sexta-feira".
// Adicione a esse botão o ID "btn-friday";
// Adicione esse botão como filho/filha da tag <div> com classe "buttons-container".

function buttonFriday() {
  let button = document.createElement("button");
  button.innerText = "Sexta-Feira";
  button.id = "btn-friday";

  buttonsContainer.appendChild(button);
}
buttonFriday();

// 5. Implemente uma função que modifica o texto exibido nos dias que são Sexta-feira. Adicione ao botão "Sexta-feira" um evento de "click" e modifique o texto a ser exibido nos dias que são sextas-feiras.

let friday = document.querySelectorAll(".friday");
let fridayBtn = document.querySelector("#btn-friday");

fridayBtn.addEventListener("click", fridayButton);

function fridayButton() {
  for (let index = 0; index < 4; index += 1) {
    friday[index].innerText = "Sexta-feira";
  }
}

// 6. Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.

// function zoomIn() {
//   let days = document.querySelector("#days");
//   days.addEventListener("mouseover", function (event) {
//     event.target.style.fontSize = "30px";
//   });
// }

// function zoomOut() {
//   let days = document.querySelector("#days");
//   days.addEventListener("mouseout", function (event) {
//     event.target.style.fontSize = "20px";
//   });
// }

// 7. Implemente uma função que adicione uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks".

// 8. Implemente uma função que adicione uma legenda com cor para a tarefa.
// * Essa função deverá receber como parâmetro uma string ('cor') e criar dinamicamente um elemento de tag `<div>` com a classe `task`.
// O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada.
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks".

// 9. Implemente uma função que selecione uma tarefa
// Adicione um evento que ao clicar no elemento com a tag <div> referente à cor da sua tarefa, atribua a esse elemento a classe task selected, ou seja, quando sua tarefa possuir a classe task selected ela estará selecionada.
// Ao clicar novamente no elemento, a sua classe deverá voltar a ser somente task, ou seja, essa tarefa está deixando de ser uma tarefa selecionada.
