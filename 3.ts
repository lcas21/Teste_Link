import * as fs from "fs";

const faturamentoTeste = "dados.json";
const ContfaturamentoTeste = fs.readFileSync(faturamentoTeste, "utf-8");

const jsonObject = JSON.parse(ContfaturamentoTeste);

console.log(jsonObject);

function calcularMenorFaturamento(
  dados: { dia: number; valor: number }[]
): number {
  let menorFaturamento = Infinity;

  for (let dado of dados) {
    if (dado.valor > 0 && dado.valor < menorFaturamento) {
      menorFaturamento = dado.valor;
    }
  }

  return menorFaturamento;
}

function calcularMaiorFaturamento(
  dados: { dia: number; valor: number }[]
): number {
  let maiorFaturamento = -Infinity;

  for (let dado of dados) {
    if (dado.valor > maiorFaturamento) {
      maiorFaturamento = dado.valor;
    }
  }

  return maiorFaturamento;
}

function calcularMediaFaturamento(
  dados: { dia: number; valor: number }[]
): number {
  let somaFaturamento = 0;
  let diasComFaturamento = 0;

  for (let dado of dados) {
    if (dado.valor > 0) {
      somaFaturamento += dado.valor;
      diasComFaturamento++;
    }
  }

  if (diasComFaturamento === 0) {
    return 0;
  }

  const mediaFaturamento = somaFaturamento / diasComFaturamento;

  return mediaFaturamento;
}

const faturamentoMensal = jsonObject;

const menorFaturamentoDiario = calcularMenorFaturamento(faturamentoMensal);

const maiorFaturamentoDiario = calcularMaiorFaturamento(faturamentoMensal);

const mediaFaturamentoDiario = calcularMediaFaturamento(faturamentoMensal);

function calcularDiasMaiorMedia(
  dados: { dia: number; valor: number }[]
): number[] {
  let maiorQueMediaMensal: number[] = [];
  for (let dado of dados) {
    if (dado.valor > mediaFaturamentoDiario) {
      maiorQueMediaMensal.push(dado.dia);
    }
  }
  return maiorQueMediaMensal;
}

const diasMaiorMedia = calcularDiasMaiorMedia(faturamentoMensal);

console.log(
  `O menor valor de faturamento diário é: R$ ${menorFaturamentoDiario}`
);

console.log(
  `O maior valor de faturamento diário é: R$ ${maiorFaturamentoDiario}`
);

console.log(`A média de faturamento diário é: R$ ${mediaFaturamentoDiario}`);

console.log(
  `O número de dias com faturamento maior que a média é: ${diasMaiorMedia}`
);
