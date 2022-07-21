// Crie uma variável para armazenar o estado da pessoa candidata no processo seletivo, que pode ser: 'aprovada', 'lista' ou 'reprovada';

let estado = "lista";

switch (estado) {
  case "aprovada":
    console.log("Parabéns, você foi aprovada(o)!");
    break;

  case "lista":
    console.log("Você está na nossa lista de espera");
    break;

  case "reprovada":
    console.log("Você foi reprovada(o)!");
    break;

  default:
    console.log("Valor não identificado");
}
