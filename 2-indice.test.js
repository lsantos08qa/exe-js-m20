const encontrarIndices = require('./2-indice');

console.log(
    JSON.stringify(encontrarIndices([15, 3, 9, 2, 11])) === JSON.stringify({ indiceMaior: 0, indiceMenor: 3 }) 
    ? "Teste 1 passou" : "Teste 1 falhou"
);
console.log(
    JSON.stringify(encontrarIndices([42, 1, 39, 8, 17])) === JSON.stringify({ indiceMaior: 0, indiceMenor: 1 }) 
    ? "Teste 2 passou" : "Teste 2 falhou"
);
