const fetch = require('node-fetch');

const fetchJoke = async () => {
  const url = 'https://api.chucknorris.io/jokes/random?category=dev';

  // Apenas retorna o estado.
  // console.log(fetch(url));

  // Controlando o fluxo assíncrono, retorna o dado requisitado.
  const result = await fetch(url)
    .then((response) => response.json())
    .then((data) => data.value)
    // Caso ocorra algum erro, usamos .catch para retorná-lo.
    .catch((error) => `Algo deu errado :( \n${error}`);

  console.log(result);
}

fetchJoke();