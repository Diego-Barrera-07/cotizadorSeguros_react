export const Marcas = [
  { id: 1, name: "Europeo" },
  { id: 2, name: "Americano" },
  { id: 3, name: "Asiatico" },
];

const YEARMAX = new Date().getFullYear();

export const Years = Array.from( new Array(20), (valor, index) => YEARMAX - index)


export const Planes = [
    { id: 1, name: "Basico"},
    { id: 2, name: "Completo"},
]