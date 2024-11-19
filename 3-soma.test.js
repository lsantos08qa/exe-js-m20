const somarMultiplos = require('./3-soma');

describe('Função somarMultiplos', () => {
    test('Deve retornar 214216 como soma de múltiplos de 5 ou 7 abaixo de 1000', () => {
        expect(somarMultiplos()).toBe(156361);
    });
});
