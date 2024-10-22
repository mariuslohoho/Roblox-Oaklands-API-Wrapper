import React from "react";

interface props {
  children?: React.ReactNode;
  className?: string;
  onMouseDown?: () => void;
}

export default function UIBase(props: props) {
  return (
    <div
      className={
        "flex space-x-2 bg-gray-800 px-2 py-1 rounded-md " +
        props.className
      }
      onClick={props.onMouseDown}
    >
      {props.children}
    </div>
  );
}
