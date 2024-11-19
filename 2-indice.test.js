const encontrarIndices = require('./2-indice');

describe('Função encontrarIndices', () => {
    test('Deve retornar os índices { indiceMaior: 0, indiceMenor: 3 } para o array [15, 3, 9, 2, 11]', () => {
        expect(encontrarIndices([15, 3, 9, 2, 11])).toEqual({ indiceMaior: 0, indiceMenor: 3 });
    });

    test('Deve retornar os índices { indiceMaior: 0, indiceMenor: 1 } para o array [42, 1, 39, 8, 17]', () => {
        expect(encontrarIndices([42, 1, 39, 8, 17])).toEqual({ indiceMaior: 0, indiceMenor: 1 });
    });
});
