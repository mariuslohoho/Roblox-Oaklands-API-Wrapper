import { createContext, useEffect, useState } from "react";
import { DefaultSettings, Settings } from "../constants/Settings";
import { ReconcileObjects } from "../util/Reconcile";

export const SettingsContext = createContext<{
  data: Partial<Settings>;
  setData: React.Dispatch<React.SetStateAction<Partial<Settings> | null>>;
  saveData: () => void;
} | null>(null);

interface props {
  children?: React.ReactNode;
}
export default function SettingsContextProvider(props: props) {
  const [data, setData] = useState<Partial<Settings> | null>(null);

  const saveData = () => {
    if (data !== null) {
      window.localStorage.setItem(
        "Roblox-Oaklands-API-Wrapper/GlobalSettings",
        JSON.stringify(data)
      );
    }
  };

  useEffect(() => {
    const localdata = window.localStorage.getItem(
      "Roblox-Oaklands-API-Wrapper/GlobalSettings"
    );

    if (localdata === null) {
      setData(DefaultSettings);
      return;
    } else {
      const parsed = JSON.parse(localdata);

      const reconciled = ReconcileObjects(DefaultSettings, parsed);

      setData(reconciled);
    }
  }, []);

  useEffect(() => {
    if (data === null) return;

    window.localStorage.setItem(
      "Roblox-Oaklands-API-Wrapper/GlobalSettings",
      JSON.stringify(data)
    );
    console.log(data);
  }, [data]);

  if (data === null) return;

  return (
    <SettingsContext.Provider value={{ data, setData, saveData }}>
      {props.children}
    </SettingsContext.Provider>
  );
}
