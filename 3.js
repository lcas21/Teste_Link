"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs"); // Importa o módulo fs para manipulação de arquivos
// Lê o arquivo JSON
var faturamentoTeste = 'faturamentoTeste.json';
var ContfaturamentoTeste = fs.readFileSync(faturamentoTeste, 'utf-8');
// Converte o conteúdo do arquivo em um objeto JavaScript
var jsonObject = JSON.parse(ContfaturamentoTeste);
// Acessa as propriedades do objeto
console.log(jsonObject);
// ...
function calcularMenorFaturamento(faturamento) {
    // Inicializa o menor faturamento com o primeiro valor do vetor
    var menorFaturamento = faturamento[0];
    // Percorre o vetor de faturamento a partir do segundo valor
    for (var i = 1; i < faturamento.length; i++) {
        var valor = faturamento[i];
        // Ignora os dias sem faturamento (valores negativos ou zero)
        if (valor > 0 && valor < menorFaturamento) {
            // Atualiza o menor faturamento, caso encontre um valor menor
            menorFaturamento = valor;
        }
    }
    // Retorna o menor faturamento
    return menorFaturamento;
}
function calcularMaiorFaturamento(faturamento) {
    // Inicializa o menor faturamento com o primeiro valor do vetor
    var maiorFaturamento = faturamento[0];
    // Percorre o vetor de faturamento a partir do segundo valor
    for (var i = 1; i < faturamento.length; i++) {
        var valor = faturamento[i];
        // Ignora os dias sem faturamento (valores negativos ou zero)
        if (valor > 0 && valor > maiorFaturamento) {
            // Atualiza o menor faturamento, caso encontre um valor menor
            maiorFaturamento = valor;
        }
    }
    // Retorna o menor faturamento
    return maiorFaturamento;
}
function calcularMediaFaturamento(faturamento) {
    // Inicializa o menor faturamento com o primeiro valor do vetor
    var somaFaturamento = 0;
    var diasComFaturamento = 0;
    // Percorre o vetor de faturamento a partir do segundo valor
    for (var i = 1; i < faturamento.length; i++) {
        var valor = faturamento[i];
        // Ignora os dias sem faturamento (valores negativos ou zero)
        if (valor > 0) {
            somaFaturamento += valor;
            diasComFaturamento++;
        }
    }
    // Calcula a média de faturamento diário
    var mediaFaturamento = somaFaturamento / diasComFaturamento;
    // Retorna a média de faturamento diário
    return mediaFaturamento;
}
var faturamentoMensal = jsonObject.faturamento_Janeiro;
var menorFaturamentoDiario = calcularMenorFaturamento(faturamentoMensal);
var maiorFaturamentoDiario = calcularMaiorFaturamento(faturamentoMensal);
var mediaFaturamentoDiario = calcularMediaFaturamento(faturamentoMensal);
var diasMaiorMedia = calcularDiasMaiorMedia(faturamentoMensal);
function calcularDiasMaiorMedia(faturamento) {
    var maiorQueMediaMensal = 0;
    for (var i = 1; i < faturamento.length; i++) {
        var valor = faturamento[i];
        if (valor > mediaFaturamentoDiario) {
            maiorQueMediaMensal++;
        }
    }
    return maiorQueMediaMensal;
}
console.log("O menor valor de faturamento di\u00E1rio \u00E9: R$ ".concat(menorFaturamentoDiario));
console.log("O maior valor de faturamento di\u00E1rio \u00E9: R$ ".concat(maiorFaturamentoDiario));
console.log("A m\u00E9dia de faturamento di\u00E1rio \u00E9: R$ ".concat(mediaFaturamentoDiario));
console.log("O n\u00FAmero de dias com faturamento maior que a m\u00E9dia mensal \u00E9: ".concat(diasMaiorMedia));
