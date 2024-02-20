// Dadas as companias abaixo, descubra o valor de mercado de todas as companias somadas utilizando o Reduce.
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

const finalValue = companies.reduce((acc, value) => {
  const money = value.marketValue + acc;
  return money;
}, 0);

console.log(finalValue);
