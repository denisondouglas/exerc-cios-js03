// Faça um progrma onde, você chame uma função que calcule a taxa mensal de juros de um investimento.
// - Você deve enviar como argumentos da função - Valor inicial investido - valor atual do investimento - Tempo em meses, que o valor está investido.
// A função deve retornar a taxa de juros já formatada.EX: 2.5%. Siga a seguinte fórmula para te auxiliar:
// Cálculo taxa = juros (Valor atual do investimento - Valor inicial investido)/Valor inicial investido*tempo.

function investimentos(valorAtual, investimentoInicial, mesesInvestidos) {
  const juros =
    (valorAtual - investimentoInicial) / (valorAtual * mesesInvestidos);
  console.log((juros * 100).toFixed(2) + "%");
}

investimentos(3100, 2000, 6);
