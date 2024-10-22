import React from "react";
import UIBase from "./UIBase";

interface props {
  Text?: string;
  IconName?: string;
  onMouseDown?: () => void;
}

export default function ActionButton(props: props) {
  return (
    <UIBase
      className="bg-gray-800 cursor-pointer select-none"
      onMouseDown={props.onMouseDown}
    >
      <span className="material-symbols-outlined">{props.IconName}</span>
      <span className="font-medium">{props.Text}</span>
    </UIBase>
  );
}
