// Escreva uma função que lê dois números e ela diz qual é o maior.

const comparsion = (numberOne, numberTwo) => {
  if (numberOne > numberTwo) {
    console.log(`${numberOne} é maior que ${numberTwo}`);
  } else if (numberTwo > numberOne) {
    console.log(`${numberTwo} é maior que ${numberOne}`);
  }
  return;
};

comparsion(4, 5);
