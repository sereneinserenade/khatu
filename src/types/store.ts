export enum Supermarkets {
  Lidl = "lidl",
  Rewe = "rewe",
  Netto = "netto",
  Penny = "penny",
}

export enum ElectronicsStores {
  Saturn = "saturn",
  MediaMarkt = "mediamarkt",
}

export enum TransactionType {
  Income = "in",
  Expense = "out",
}

type Services = Supermarkets | ElectronicsStores;

export interface TransactionEntity {
  name: string;
  time: Date;
  amount: number;
  service: Services;
  type: TransactionType;
}

export interface Data {
  createdAt: Date;
  modifiedAt: Date;
  entities: TransactionEntity[];
}
