import { useContext } from "react";
import { Settings } from "../constants/Settings";
import { SettingsContext } from "../contexts/SettingsProvider";

interface useSettingsResult {
  data: Settings;
  setData: React.Dispatch<React.SetStateAction<Settings>>;
  saveData: () => void;
}

export function useSettings(): useSettingsResult {
  const context = useContext(SettingsContext);

  if (context === null) {
    console.error(
      "'useSettings' must be used within a 'SettingsContextProvider'"
    );
  }

  return context as useSettingsResult;
}
