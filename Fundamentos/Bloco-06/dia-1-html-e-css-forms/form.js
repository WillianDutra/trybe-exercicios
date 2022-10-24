const enviar = document.querySelector("#send-btn");

enviar.addEventListener("click", function (event) {
  event.preventDefault();
});

const apagar = document.querySelector("#clear-btn");

apagar.addEventListener("click", function () {
  document.querySelector("#form").reset();
});
