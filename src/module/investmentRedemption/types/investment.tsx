export interface Acoes {
  id: string;
  nome: string;
  percentual: number;
}

export interface ListaInvestimentos {
  nome: string;
  objetivo: string;
  saldoTotal: number;
  indicadorCarencia: string;
  acoes: Acoes[];
}
