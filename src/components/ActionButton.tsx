import React from "react";

interface props {
  Text?: string;
  IconName?: string;
  onMouseDown?: () => void;
}

export default function ActionButton(props: props) {
  return (
    <div
      className="flex space-x-2 bg-gray-800 px-2 py-1 mb-2 rounded-md cursor-pointer select-none"
      onClick={props.onMouseDown}
    >
      <span className="material-symbols-outlined">{props.IconName}</span>
      <span className="font-medium">{props.Text}</span>
    </div>
  );
}
