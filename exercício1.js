//  Escreva um programa onde você chame uma função eviando um número, a função deve imprimir na tela do 1 ao número determinado por você.

const numbers = (number) => {
  for (i = 1; i < number; i++) {
    console.log("Contando...", i);
  }
};

numbers(11);
