import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Settings from "./Settings";

export default function Footer() {
  const navigate = useNavigate();
  const [settingsOpened, setSettingsOpened] = useState<boolean>(false);

  return (
    <>
      <div className="fixed left-1/2 -translate-x-[50%] bottom-5 flex w-[90%] gap-1 *:h-11 drop-shadow-2xl">
        <div
          className="cursor-pointer select-none px-10 sticky bottom-5 flex-grow justify-center items-center border-borderDark border-2 rounded-md drop-shadow-lg bg-gray-900 py-2"
          onMouseDown={() => navigate("/")}
        >
          <span className="text-center">Back to home</span>
        </div>
        <div
          className="cursor-pointer select-none px-2 sticky bottom-5 w-11 flex justify-center items-center border-borderDark border-2 rounded-md drop-shadow-lg bg-gray-900 py-2"
          onMouseDown={() => setSettingsOpened(!settingsOpened)}
        >
          <span className="material-symbols-outlined w-full h-full text-center">
            settings
          </span>
        </div>
      </div>
      {settingsOpened && <Settings />}
    </>
  );
}
