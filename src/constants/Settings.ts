export type Settings = {
  ClassicShop: {
    TooltipStyle: "Default" | "Custom" | "Oaklands";
  };
};

export const DefaultSettings: Partial<Settings> = {
  ClassicShop: {
    TooltipStyle: "Default",
  },
};
