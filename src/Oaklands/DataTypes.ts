export type Currency = "Cash" | "Candy2024";

export type CurrencyValue = {
  Currency: Currency;
  Amount: number;
};

export type LimitedValue = {
  Limited: boolean;
  Obtainable: boolean;
  LastObtainable: string;
};

export interface OaklandsItemType {
  name: string;
  ImageUrl: string;
  Cost: CurrencyValue;
  Description: string;
  Limited?: LimitedValue;
}
