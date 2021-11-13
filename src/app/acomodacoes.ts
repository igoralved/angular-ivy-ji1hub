export enum TipoAcomodacao {
  CASA,
  APARTAMENTO,
  QUARTO,
}
export interface Acomodacao {
  id: number;
  tipo: String;
  capacidade: number;
  localizacao: String;
  permiteanimais: boolean;
  temestacionamento: boolean;
}

export const acomodacoes = [
  {
    id: 1,
    tipo: 'CASA',
    capacidade: 13,
    localizacao: 'New York',
    permiteanimais: true,
    temestacionamento: true,
  },
  {
    id: 2,
    tipo: 'APARTAMENTO',
    capacidade: 10,
    localizacao: 'Miami',
    permiteanimais: true,
    temestacionamento: true,
  },
  {
    id: 3,
    tipo: 'APARTAMENTO',
    capacidade: 20,
    localizacao: 'New York',
    permiteanimais: false,
    temestacionamento: true,
  },
];
