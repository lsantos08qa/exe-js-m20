const calcularMDC = require('./1-mdc.js');

function testarCalcularMDC() {
    console.log(calcularMDC(120, 48) === 24 ? "Teste 1 passou" : "Teste 1 falhou");
    console.log(calcularMDC(81, 27) === 27 ? "Teste 2 passou" : "Teste 2 falhou");
    console.log(calcularMDC(100, 25) === 25 ? "Teste 3 passou" : "Teste 3 falhou");
}

testarCalcularMDC();
