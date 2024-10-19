import React from "react";

interface props {
  fade_in?: boolean;
}

export default function Title(props: props) {
  return (
    <div className="pb-10">
      <span
        className={`font-bold text-3xl sm:text-5xl ${
          props.fade_in && "animate-fade-in"
        }`}
      >
        Oaklands API Wrapper
      </span>
    </div>
  );
}
