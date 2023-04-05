import * as fs from 'fs';

const faturamentoTeste = 'faturamentoTeste.json';
const ContfaturamentoTeste = fs.readFileSync(faturamentoTeste, 'utf-8');

const jsonObject = JSON.parse(ContfaturamentoTeste);

console.log(jsonObject);

function calcularMenorFaturamento(faturamento: number[]): number {

    let menorFaturamento = faturamento[0];

    for (let i = 1; i < faturamento.length; i++) {
        const valor = faturamento[i];

        if (valor > 0 && valor < menorFaturamento) {
            menorFaturamento = valor;
        }
    }

    return menorFaturamento;
}

function calcularMaiorFaturamento(faturamento: number[]): number {

    let maiorFaturamento = faturamento[0];

    for (let i = 1; i < faturamento.length; i++) {
        const valor = faturamento[i];

        if (valor > 0 && valor > maiorFaturamento) {
            maiorFaturamento = valor;
        }
    }

    return maiorFaturamento;
}

function calcularMediaFaturamento(faturamento: number[]): number {

    let somaFaturamento = 0;
    let diasComFaturamento = 0;

    for (let i = 1; i < faturamento.length; i++) {
        const valor = faturamento[i];


        if (valor > 0) {
            somaFaturamento += valor;
            diasComFaturamento++;
        }

    }

    const mediaFaturamento = somaFaturamento / diasComFaturamento;

    return mediaFaturamento;
}


const faturamentoMensal = jsonObject.faturamento_Janeiro;

const menorFaturamentoDiario = calcularMenorFaturamento(faturamentoMensal);

const maiorFaturamentoDiario = calcularMaiorFaturamento(faturamentoMensal);

const mediaFaturamentoDiario = calcularMediaFaturamento(faturamentoMensal);

const diasMaiorMedia = calcularDiasMaiorMedia(faturamentoMensal);

function calcularDiasMaiorMedia(faturamento: number[]): number {
    let maiorQueMediaMensal = 0;
    for (let i = 1; i < faturamento.length; i++) {
        const valor = faturamento[i];
        if (valor > mediaFaturamentoDiario) {
            maiorQueMediaMensal++;
        }
    }
    return maiorQueMediaMensal;
}


console.log(`O menor valor de faturamento diário é: R$ ${menorFaturamentoDiario}`);

console.log(`O maior valor de faturamento diário é: R$ ${maiorFaturamentoDiario}`);

console.log(`A média de faturamento diário é: R$ ${mediaFaturamentoDiario}`);

console.log(`O número de dias com faturamento maior que a média mensal é: ${diasMaiorMedia}`);