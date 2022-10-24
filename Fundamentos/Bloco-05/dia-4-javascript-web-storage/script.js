window.onload = function () {
  document.querySelector(".paragraph").style.fontSize =
    localStorage["font-size"];
  document.querySelector(".paragraph").style.lineHeight =
    localStorage["spacing-size"];
  document.body.style.backgroundColor = localStorage["bg-color"];
  textParagraph[0].style.color = localStorage["text-color"];
};

//As pessoas devem ter o poder de alterar:
//Cor de fundo da tela;
let inputBG = document.querySelector("#bg-color");

inputBG.addEventListener("input", changeColor);

function changeColor() {
  let colorValue = inputBG.value;
  localStorage.setItem("bg-color", colorValue);
  document.body.style.backgroundColor = localStorage["bg-color"];
}

//Cor do texto;
const inputText = document.querySelector("#text-color");
const textParagraph = document.getElementsByClassName("paragraph");

inputText.addEventListener("input", changeText);

function changeText() {
  let colorValue = inputText.value;
  localStorage.setItem("text-color", colorValue);
  textParagraph[0].style.color = localStorage["text-color"];
}

//Tamanho da fonte;
const increaseFont = document.querySelector("#increase-font");

increaseFont.addEventListener("click", increaseFontSize);

function increaseFontSize() {
  let fontSize = "30px";
  localStorage.setItem("font-size", fontSize);
  document.querySelector(".paragraph").style.fontSize =
    localStorage["font-size"];
}

const decreaseFont = document.querySelector("#decrease-font");

decreaseFont.addEventListener("click", decreaseFontSize);

function decreaseFontSize() {
  let fontSize = "20px";
  localStorage.setItem("font-size", fontSize);
  document.querySelector(".paragraph").style.fontSize =
    localStorage["font-size"];
}

//Espaçamento entre as linhas do texto;
const increaseSpacing = document.querySelector("#increase-spacing");

increaseSpacing.addEventListener("click", increaseSpacingSize);

function increaseSpacingSize() {
  let spacingSize = "40px";
  localStorage.setItem("spacing-size", spacingSize);
  document.querySelector(".paragraph").style.lineHeight =
    localStorage["spacing-size"];
}

const decreaseSpacing = document.querySelector("#decrease-spacing");

decreaseSpacing.addEventListener("click", decreaseFontSpacing);

function decreaseFontSpacing() {
  let spacingSize = "30px";
  localStorage.setItem("spacing-size", spacingSize);
  document.querySelector(".paragraph").style.lineHeight =
    localStorage["spacing-size"];
}

//Tipo da fonte (Font family).

// const arial = document.querySelector("#arial");

// arial.addEventListener("click", fontArial);

// function fontArial() {
//   let font = "arial";
//   localStorage.setItem("font-family", font);
//   document.getElementsByTagName("body")[0].style.fontFamily =
//     localStorage["font-family"];
// }

// const sans = document.querySelector("#sans");

// sans.addEventListener("click", fontSans);

// function fontSans() {
//   let font = "sans-serif";
//   localStorage.setItem("font-family", font);
//   document.getElementsByTagName("body")[0].style.fontFamily =
//     localStorage["font-family"];
// }

//Essas preferências devem ser salvas de forma que, ao retornar à página, as preferências que foram previamente configuradas possam ser aplicadas na tela.
