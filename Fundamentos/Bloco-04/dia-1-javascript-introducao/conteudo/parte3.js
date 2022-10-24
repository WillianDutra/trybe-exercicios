// Crie uma constante que receba a nota de uma pessoa candidata em um desafio técnico, e atribua a ela um valor entre 1 e 100;
const nota = 60;

//Implemente uma lógica que verifique se a pessoa candidata foi aprovada, reprovada ou se ela está na lista de espera.

if (nota >= 80) {
  console.log("Parabéns, você foi aprovada(o)!");
} else if (nota >= 60) {
  console.log("Você está na nossa lista de espera");
} else if (nota < 60) {
  console.log("Você foi reprovada(o)!");
}
