import React from "react";

interface props {
  char: string;
  className?: string;
}

export default function Keybind(props: props) {
  return (
    <div className={`border-border border-2 w-7 h-7 ${props.className}`}>
      {props.char}
    </div>
  );
}
