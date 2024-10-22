import React from "react";
import { useSettings } from "../hooks/useSettings";
import Dropdown from "./Dropdown";

type OptionsType = "Text" | "Number" | "Dropdown" | "Checkbox";

interface SettingsSectionHeaderProps {
  title: string;
}
const SettingsSectionHeader = (props: SettingsSectionHeaderProps) => {
  return <div className="font-bold text-lg">{props.title}</div>;
};

interface SettingsOptionPropsBase {
  displayName?: string;
  description?: string;
  type: OptionsType;
  onEdit?: (NewValue: string) => void;
}

interface SettingsOptionDropdownProps extends SettingsOptionPropsBase {
  type: "Dropdown";
  dropdownOptions: string[];
  defaultValue?: string;
}

interface SettingsOptionCheckboxProps extends SettingsOptionPropsBase {
  type: "Checkbox";
}

type SettingsOptionProps =
  | SettingsOptionDropdownProps
  | SettingsOptionCheckboxProps;

const SettingsOption = (props: SettingsOptionProps) => {
  return (
    <div className="flex px-7 justify-around items-center">
      <span className="font-semibold inline-flex flex-1">
        {props.displayName}
      </span>
      {props.type === "Dropdown" && (
        <Dropdown
          dropdownOptions={props.dropdownOptions}
          onChange={props.onEdit}
          defaultValue={props.defaultValue}
        />
      )}
    </div>
  );
};

export default function Settings() {
  const { data, setData, saveData } = useSettings();

  return (
    <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 max-w-[95vw] h-[30rem] w-[30rem] rounded-lg border-borderDark border-2 bg-oaklandsUIBlack">
      <span className="p-2 block font-bold text-2xl">Settings</span>
      <SettingsSectionHeader title="Classic Store" />
      <SettingsOption
        displayName="Tooltip Style"
        type="Dropdown"
        dropdownOptions={["Default", "Custom", "Oaklands"]}
        defaultValue={data.ClassicShop.TooltipStyle}
        onEdit={(NewValue) => {
          if (
            !data ||
            !(
              NewValue === "Default" ||
              NewValue === "Custom" ||
              NewValue === "Oaklands"
            )
          )
            return;
          setData((prev) => {
            prev.ClassicShop.TooltipStyle = NewValue as
              | "Default"
              | "Custom"
              | "Oaklands";
            return prev;
          });
          saveData();
          console.log(data);
        }}
      />
    </div>
  );
}
