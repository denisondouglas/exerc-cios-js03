// Pegue a lista abaixo e casso tenha o dado "True" adicione o dado "sector:Black", caso contrário, adicione o setor green utilizando o MAP.

const list = [
  { name: "Rodolfo", vip: true },
  { name: "Maria", vip: false },
  { name: "João", vip: true },
  { name: "Bruno", vip: true },
  { name: "Carla", vip: false },
  { name: "Ana", vip: true },
  { name: "Júlio", vip: false },
];

const mainList = list.map((sector) => {
  let area;
  if (sector.vip == true) {
    area = "Black";
  } else {
    area = "Green";
  }
  const setores = { name: sector.name, vip: sector.vip, setor: area };
  return setores;
});

console.log(mainList);
