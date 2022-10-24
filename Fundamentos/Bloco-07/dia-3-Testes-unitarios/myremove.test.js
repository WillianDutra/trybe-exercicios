const myRemove = require('./myremove.js');

// 2. A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item caso ele exista no array

describe('Verifica a função myRemove', () => {
  // 1. Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
  it('Verifica se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toStrictEqual([1, 2, 4]);
  })

  // 2. Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
  it('Verifica se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toBe([1, 2, 4]);
  })

  // 3. Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado
  it('Verifica se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toStrictEqual([1, 2, 3, 4]);
  })
})