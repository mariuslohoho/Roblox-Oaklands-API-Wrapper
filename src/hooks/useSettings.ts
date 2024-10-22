import { useContext } from "react";
import { Settings } from "../constants/Settings";
import { SettingsContext } from "../contexts/SettingsProvider";

export function useSettings(): {
  data: Settings;
  setData: React.Dispatch<React.SetStateAction<object>>;
} {
  const context = useContext(SettingsContext);

  if (context === null) {
    console.error(
      "'useSettings' must be used within a 'SettingsContextProvider'"
    );
  }

  return context as {
    data: Settings;
    setData: React.Dispatch<React.SetStateAction<object>>;
  };
}
