import React from "react";

interface props {
  text?: string;
}

export default function SectionButton(props: props) {
  return (
    <div className="cursor-pointer w-40 h-40 rounded-md bg-red-500 flex justify-center items-end pb-5 font-[130]">
      <span className="text-xl">{props.text}</span>
    </div>
  );
}
