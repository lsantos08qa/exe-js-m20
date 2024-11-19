const calcularMDC = require('./1-mdc');

describe('Função calcularMDC', () => {
    test('Deve retornar 24 como MDC de 120 e 48', () => {
        expect(calcularMDC(120, 48)).toBe(24);
    });

    test('Deve retornar 27 como MDC de 81 e 27', () => {
        expect(calcularMDC(81, 27)).toBe(27);
    });

    test('Deve retornar 25 como MDC de 100 e 25', () => {
        expect(calcularMDC(100, 25)).toBe(25);
    });
});
