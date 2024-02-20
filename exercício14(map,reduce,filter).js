// Dada a lista de companias abaixo, cire uma função que exiba o crescimento dela que foi de 10%, exiba apenas as que foram fundadas antes de 2000 e por final, some o valor dessas companias que restaram, você deve fazer utilizando MAP, FILTER e REDUCE.

const companies = [
  { name: "Samsung", marketValue: 50, CEO: "Kim Hyum Suk", foundedOn: 1938 },
  {
    name: "Microsoft",
    marketValue: 415,
    CEO: "Satya Nadella",
    foundedOn: 1975,
  },
  { name: "Intel", marketValue: 117, CEO: "Brian Krzanich", foundedOn: 1968 },
  {
    name: "Facebook",
    marketValue: 383,
    CEO: "Mark Zuckeberg",
    foundedOn: 2004,
  },
  { name: "Spotify", marketValue: 30, CEO: "Daniel EK", foundedOn: 2006 },
  { name: "Apple", marketValue: 845, CEO: "Tim Cook", foundedOn: 1976 },
];

const percentageGained = companies.map((name) => {
  const currentList = {
    name: name.name,
    value: name.marketValue + name.marketValue * 0.1,
    CEO: name.CEO,
    foundedOn: name.foundedOn,
  };
  return currentList;
});

console.log(percentageGained);

const oldestFounded = percentageGained.filter((name) => name.foundedOn < 2000);
console.log(oldestFounded);

const finalValue = oldestFounded.reduce((acc, current) => {
  const final = current.value + acc;
  return final;
}, 0);

console.log(finalValue);
