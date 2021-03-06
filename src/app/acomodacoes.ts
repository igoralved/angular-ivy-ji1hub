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
  permiteAnimais: boolean;
  temEstacionamento: boolean;
}

export const acomodacoes = [
  {
    id: 1,
    tipo: 'CASA',
    capacidade: 13,
    localizacao: 'New York',
    permiteAnimais: true,
    temEstacionamento: true,
  },
  {
    id: 2,
    tipo: 'APARTAMENTO',
    capacidade: 10,
    localizacao: 'Miami',
    permiteAnimais: true,
    temEstacionamento: true,
  },
  {
    id: 3,
    tipo: 'APARTAMENTO',
    capacidade: 20,
    localizacao: 'New York',
    permiteAnimais: false,
    temEstacionamento: true,
  },
];
