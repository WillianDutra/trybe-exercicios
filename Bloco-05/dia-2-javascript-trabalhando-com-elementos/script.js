// Acesse o elemento elementoOndeVoceEsta.
document.querySelector("#elementoOndeVoceEsta");

// Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
document.querySelector("#elementoOndeVoceEsta").parentNode;

// Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
document.querySelector("#primeiroFilhoDoFilho").innerText = "Primeiro Filho";

// Acesse o primeiroFilho a partir de pai.
document.querySelector("#pai").firstElementChild;

// Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.
document.querySelector("#elementoOndeVoceEsta").parentNode.firstElementChild;

// Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.
document.querySelector("#elementoOndeVoceEsta").parentNode.innerText;

// Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.
document.querySelector("#elementoOndeVoceEsta").parentNode.lastElementChild;

// Agora acesse o terceiroFilho a partir de pai.
document.querySelector("#pai").firstChild.nextElementSibling.nextElementSibling
  .nextElementSibling;

// Crie um irmão para elementoOndeVoceEsta.
let elemento1 = document.querySelector("#pai");
let adicao1 = document.createElement("section");
elemento1.appendChild(adicao1);

// Crie um filho para elementoOndeVoceEsta.
let elemento2 = document.querySelector("#elementoOndeVoceEsta");
let adicao2 = document.createElement("section");
elemento2.appendChild(adicao2);

// Crie um filho para primeiroFilhoDoFilho.
let elemento3 = document.getElementById("primeiroFilho");
let adicao3 = document.createElement("section");
adicao3.id = "filhoDoPrimeiroFilho";
elemento3.appendChild(adicao3);

// A partir desse filho criado, acesse terceiroFilho.

// Remova todos os elementos filhos de paiDoPai exceto pai, elementoOndeVoceEsta e primeiroFilhoDoFilho.
