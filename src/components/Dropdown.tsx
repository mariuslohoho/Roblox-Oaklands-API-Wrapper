import React from "react";

interface props {
  dropdownOptions: string[];
  onChange?: (arg0: string) => void;
  defaultValue?: string;
}
export default function Dropdown(props: props) {
  return (
    <select
      onChange={(e) => props.onChange?.(e.target.value)}
      className="p-2 rounded-md bg-oaklandsUIBlack border-borderDark border-2"
      defaultValue={props.defaultValue}
    >
      {props.dropdownOptions.map((option, i) => (
        <option key={i} value={option} className="bg-oaklandsUIBlack">
          {option}
        </option>
      ))}
    </select>
  );
}
