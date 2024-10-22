import React from "react";
import { useSettings } from "../hooks/useSettings";

export default function Settings() {
  const { data } = useSettings();

  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 h-[30rem] w-[30rem] rounded-lg border-borderDark border-2 bg-oaklandsUIBlack">
      <span className="p-2 block font-bold text-xl">Settings</span>
      <span>{JSON.stringify(data)}</span>
    </div>
  );
}
