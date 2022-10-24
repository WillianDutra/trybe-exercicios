const sum = require('./sum.js');

// 1.A função sum(a, b) retorna a soma do parâmetro a com o b

describe('Verifica a função sum', () => {
  // Teste se o retorno de sum(4, 5) é 9
  it('A função sum recebe os valores 4 e 5, e retorna o valor 9', () => {
    expect(sum(4, 5)).toBe(9);
  })
  
  // Teste se o retorno de sum(0, 0) é 0
  it('A função sum recebe os valores 0 e 0, e retorna o valor 0', () => {
    expect(sum(0, 0)).toBe(0);
  })
  
  // Teste se a função sum lança um erro quando os parâmetros são 4 e "5"(string 5)
  it('A função sum recebe os valores 4 e "5", e retorna um erro', () => {
    expect(() => sum(4, '5')).toThrow("parameters must be numbers");
  })

  // Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")

})