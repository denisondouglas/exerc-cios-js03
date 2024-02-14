// Escreva uma função que faz a tabuada até o 10 de um número determinado. Lembrando que ela não aceita números maiores que 10 e menores que 1.

const tabuada = (number) => {
  if (number > 10 || number < 1) {
    console.log("Digite um valor que esteja entre 1 e 10!");
    return;
  }

  for (let i = 1; i <= 10; i++) {
    console.log(`${i} x ${number} = ${i * number}`);
  }
};

tabuada(9);
