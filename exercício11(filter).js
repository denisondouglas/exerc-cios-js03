// Considerando a lista de números abaixo, crie um array com filter que exiba apenas o números pares e divisíveis por 5...

const numbersList = [20, 3, 234, 12, 17, 541, 6, 87, 275, 1000];

const newList = numbersList.filter(
  (pares) => pares % 2 === 0 && pares % 5 === 0
);

console.log(newList);
