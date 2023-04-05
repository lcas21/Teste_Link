const faturamentoSP = 67836.43;

const faturamentoRJ = 36678.66;

const faturamentoMG = 29229.88;

const faturamentoES = 27165.48;

const faturamentoOutros = 19849.53;

const valorFaturamento =
  faturamentoSP +
  faturamentoRJ +
  faturamentoMG +
  faturamentoES +
  faturamentoOutros;

const faturamentoSPPercentual = (faturamentoSP / valorFaturamento) * 100;

const faturamentoRJPercentual = (faturamentoRJ / valorFaturamento) * 100;

const faturamentoMGPercentual = (faturamentoMG / valorFaturamento) * 100;

const faturamentoESPercentual = (faturamentoES / valorFaturamento) * 100;

const faturamentoOutrosPercentual =
  (faturamentoOutros / valorFaturamento) * 100;

console.log(
  `O faturamento da SP foi de ${faturamentoSPPercentual.toFixed(2)}%`
);

console.log(
  `O faturamento da RJ foi de ${faturamentoRJPercentual.toFixed(2)}%`
);

console.log(
  `O faturamento da MG foi de ${faturamentoMGPercentual.toFixed(2)}%`
);

console.log(
  `O faturamento da ES foi de ${faturamentoESPercentual.toFixed(2)}%`
);

console.log(
  `O faturamento de outros estados foi de ${faturamentoOutrosPercentual.toFixed(
    2
  )}%`
);
