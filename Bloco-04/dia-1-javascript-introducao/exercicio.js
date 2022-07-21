// 1.Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b, definidas no começo com os valores que serão operados. Faça programas para:

const a = 5;
const b = 6;

// Adição
console.log("Soma: " + (a + b));
// Subtração
console.log("Subtração: " + (a - b));
// Multiplicação
// prettier-ignore
console.log("Multiplicação: " + (a * b));
// Divisão
// prettier-ignore
console.log("Divisão: " + (a / b));
// Módulo
console.log("Módulo: " + (a % b));

// 2.Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.

let num1 = 12;
let num2 = 24;

if (num1 > num2) {
  console.log(num1);
} else {
  console.log(num2);
}

// 3.Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.

let num3 = 5;
let num4 = 6;
let num5 = 7;

if (num3 > num4 && num3 > num5) {
  console.log(num3 + " é o maior numero.");
} else if (num4 > num3 && num4 > num5) {
  console.log(num4 + " é o maior número.");
} else if (num5 > num3 && num5 > num4) {
  console.log(num5 + " é o maior número.");
}

// 4.Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

const valor = -3;

if (valor >= 1) {
  console.log("positive");
} else if (valor <= -1) {
  console.log("negative");
} else if ((valor = 0)) {
  console.log("zero");
}

// 5.Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

// 6.Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz...

let peca = "Peao";
const peao = "Frente e diagonal";
const torre = "frente e lado";
const cavalo = "formato de l";
const bispo = "diagonal";
const rainha = "frente, lado e diagonais";
const rei = "frente e lado";

// .toLowerCase() deixa as letras minusculas todas as letras minusculas
switch (peca.toLowerCase()) {
  case "peao":
    console.log(peao);
    break;

  case "torre":
    console.log(torre);
    break;

  case "cavalo":
    console.log(cavalo);
    break;

  case "bispo":
    console.log(bispo);
    break;

  case "rainha":
    console.log(rainha);
    break;

  case "rei":
    console.log(rei);
    break;

  default:
    console.log("Peça invalida");
}

// 7. Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:

let nota = 100;

if (nota <= 100 && nota >= 90) {
  console.log("Parabéns, sua nota é A!");
} else if (nota < 90 && nota >= 80) {
  console.log("Sua nota é B!");
} else if (nota < 80 && nota >= 70) {
  console.log("Sua nota é C!");
} else if (nota < 70 && nota >= 60) {
  console.log("Sua nota é D!");
} else if (nota < 60 && nota >= 50) {
  console.log("Sua nota é E!");
} else if (nota < 50 && nota >= 0) {
  console.log("Sua nota é F!");
} else if (nota > 100 || nota < 0) {
  console.log("Valor incorreto.");
}

// 8. Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false.

const num6 = 6;
const num7 = 7;
const num8 = 8;

if (num6 % 2 === 0 || num7 % 2 === 0 || num8 % 2 === 0) {
  console.log(true);
} else {
  console.log(false);
}

// 9. Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false.

if (num6 % 2 != 0 || num7 % 2 != 0 || num8 % 2 != 0) {
  console.log(true);
} else {
  console.log(false);
}

// 10. Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.

const custo = 50;
const venda = 100;
const imposto = 20;

let porcentagem = (imposto / 100) * custo;
let vendaTotal = venda * 1000;
let custoTotal = porcentagem + custo;
let lucro = vendaTotal - custoTotal;
console.log(lucro);

// 11. Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.

let salario = 5500.0;
let inssValor;
let irValor;

if (salario < 1556.94) {
  inssValor = salario * 0.08;
} else if (salario <= 2594.92) {
  inssValor = salario * 0.09;
} else if (salario <= 5189.82) {
  inssValor = salario * 0.11;
} else if (salario > 5189.82) {
  inssValor = 570.88;
}

let salarioBase = salario - inssValor;

// prettier-ignore
if (salarioBase <= 1903.98) {
  irValor = 0;
} else if (salarioBase <= 2826.65) {
  irValor = (salarioBase * 0.075) - 142.8;
} else if (salarioBase <= 3751.05) {
  irValor = (salarioBase * 0.15) - 354.8;
} else if (salarioBase <= 4664.68) {
  irValor = (salarioBase * 0.225) - 636.13;
} else if (salarioBase >= 4664.69) {
  (irValor = salarioBase * 0.275) - 869.36;
}

let salarioLiquido = salarioBase - irValor;
console.log(salarioLiquido);
