const myFizzBuzz = require('./myFizzBuzz.js');

// 3. A função myFizzBuzz(num) recebe um número num e retorna "fizzbuzz" se o número for divisível por 3 e 5, retorna "fizz" se for divisível apenas por 3, retorna "buzz" se divisível apenas por 5, retorna o próprio número caso não seja divisível por 3 ou 5 e retorna false caso num não seja um número.

describe('Verifica a função myFizzBuzz', () => {
  // 1. Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado
  it('Verifica se o valor 15 é divisivel por 3 e 5, e retorna o valor esperado', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz')
  })

  // 2. Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado
  it('Verifica se o valor 9 é divisivel por 3, e retorna e valor esperado', () => {
    expect(myFizzBuzz(9)).toBe('fizz');
  })

  // 3. Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado
  it('Verifica se o valor 10 é divisivel por 5, e retorna e valor esperado', () => {
    expect(myFizzBuzz(10)).toBe('buzz');
  })

  // 4. Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado
  it('Verifica se o valor 14 é divisivel por 3 e 5, e retorna e valor esperado', () => {
    expect(myFizzBuzz(14)).not.toBe('fizzbuzz');
  })

  // 5. Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado
  it('Verifica se o valor passado é um número', () => {
    expect(myFizzBuzz('a')).toBe(false);
  })
})