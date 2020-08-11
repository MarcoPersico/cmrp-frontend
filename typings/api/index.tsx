export type LoginResponse = {
  status: number;
  token: string | null;
  case?: string,
  message: string;
};

export type PayRegistryAttributes = {
  id?: number,
  identity: number,
  name: string,
  number: number,
  cuil: number,
  benefit: string,
  import: number,
  code: number,
  period: string,
  periodCode: number,
};

export type PayRegistryPerPeriodCodeAttributes = {
  id: number;
  period: number;
  code: number;
};
