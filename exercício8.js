// Escreva um programa onde, você cria uma função geradora de descontos.
// * A função aceita 4 parametros (Nome do cliente, valor da compra, um booleano que diz se é a primeira compra ou não, um booleano que diz se o cliente vai pagar a vista ou não)
// * Os descontos funcionam da seguinte forma:

//Se é a primeira compra do cliente, pagar a vista, e a compra for maior R$1000 => 30% de desconto.
//Se é a primeira compra do cliente, pagar a vista e a compra for menor que R$1000 e maior que R$500 =>  25% de desconto.
//Se é a primeira compra do cliente, pagar a vista e a compra for menor que R$500 => 20% de desconto.
//Se é a primeira compra do cliente, não pagar a vista e a compra for maior que R$1000 => 20% de desconto.
//Se é a primeira compra do cliente, não pagar a vista e a compra for menor que R$1000 e menor que R$500 => 15% de desconto.
//Se é a primeira compra do cliente, não pagar a vista e a compra for menor que R$500 => 10% de desconto.
//Se não é a primeira compra do cliente, pagar a vista e a compra for maior que R$1000 => 20% de desconto.
//Se não é a primeira compra do cliente, pagar a vista e a compra for menor que R$1000 e maior que R$500 => 15% de desconto.
//Se não é a primeira compra do cliente, pagar a vista e a compra for menor que R$500 => 10% de desconto.
//Se não é a primeira compra do cliente, não pagar a vista e a compra for maior que R$1000 => 10% de desconto.
//Se não é a primeira compra do cliente, não pagar a vista e compra for menor que R$1000 e maior que R$500 => 5% de desconto.
//Se não é a primeira compra do cliente, não pagar a vista e for menor R$500 => Não tem desconto.

// -- Se o cliente recebeu desconto, mostre na tela uma mensagem de agradecimento, o valor total da compra sem desconto, o valor com desconto e qual a porcentagem do desconto.

function compras(name, value, fisrtPurchase, purchaseInCash) {
  if (
    value > 1000 &&
    fisrtPurchase == "primeira compra" &&
    purchaseInCash == "pagar no dinheiro"
  ) {
    console.log(
      `Obrigado ${name} por comprar na Deni and Denison's. A sua compra foi de ${value} e você ganhou 30% de desconto, o valor final ficou R$${
        value * 0.7
      }`
    );
  } else if (
    value > 500 &&
    value < 1000 &&
    fisrtPurchase == "primeira compra" &&
    purchaseInCash == "pagar no dinheiro"
  ) {
    console.log(
      `Obrigado ${name} por comprar na Deni and Denison's a sua compra foi de ${value} e você ganhou 25% de desconto, o valor final ficou de R$${
        value * 0.7
      }`
    );
  }
}

compras("Denis", 1100, "primeira compra", "pagar no dinheiro");
