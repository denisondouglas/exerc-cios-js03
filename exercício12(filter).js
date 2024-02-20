// Na lista de companias abaixo, crie um filter que exiba apenas as companias que tem mais de 2 milhoes de dolares de valor de marcado e que tenham sido fundadas antes de 1975.

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

const requiredCompanies = companies.filter(
  (requeriments) =>
    requeriments.marketValue > 2 && requeriments.foundedOn < 1975
);

console.log(requiredCompanies);
