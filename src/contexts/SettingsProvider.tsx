import { createContext, useEffect, useState } from "react";
import { DefaultSettings, Settings } from "../constants/Settings";
import { ReconcileObjects } from "../util/Reconcile";

export const SettingsContext = createContext<Settings>({});

interface props {
  children?: React.ReactNode;
}
export default function SettingsContextProvider(props: props) {
  const [data, setData] = useState<Settings | null>(null);

  useEffect(() => {
    const localdata = window.localStorage.getItem(
      "Roblox-Oaklands-API-Wrapper/GlobalSettings"
    );

    if (localdata === null) {
      return;
    } else {
      const parsed = JSON.parse(localdata);

      const reconciled = ReconcileObjects(parsed, DefaultSettings);

      setData(reconciled);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(
      "Roblox-Oaklands-API-Wrapper/GlobalSettings",
      JSON.stringify(data)
    );
  }, [data]);

  return (
    <SettingsContext.Provider value={{ data, setData }}>
      {props.children}
    </SettingsContext.Provider>
  );
}
