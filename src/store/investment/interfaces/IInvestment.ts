export interface Item {
  id: string;
  nome: string;
  valorResgate: number;
  valorAplicado: number;
  excedido: boolean;
}

export type IIvestmentProps = {
  resgate: Item[];
};
