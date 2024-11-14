const somarMultiplos = require('./3-soma');

function testarSomarMultiplos() {
    console.log(somarMultiplos() === 214216 ? "Teste passou" : "Teste falhou");
}

testarSomarMultiplos();
