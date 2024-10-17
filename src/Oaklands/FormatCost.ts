import { CurrencyValue } from "./DataTypes";

export function FormatCurrency(Cost: CurrencyValue): string {
  if (Cost.Currency === "Cash") return `$${Cost.Amount.toLocaleString()}`;
  else if (Cost.Currency === "Candy2024")
    return `${Cost.Amount.toLocaleString()} Candy`;
  else return "Unknown";
}
