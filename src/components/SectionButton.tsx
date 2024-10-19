import React from "react";

interface props {
  text?: string;
  icon?: () => React.ReactNode;
}

export default function SectionButton(props: props) {
  return (
    <>
      <div className="relative cursor-pointer w-40 h-40 rounded-md bg-red-500 flex justify-center items-center">
        {props.icon?.()}
        <span className="text-xl absolute bottom-5 font-semibold">
          {props.text}
        </span>
      </div>
    </>
  );
}
