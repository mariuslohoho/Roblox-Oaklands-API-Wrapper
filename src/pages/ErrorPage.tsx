import React from "react";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div className="flex flex-col">
      <span className="font-[150] text-2xl pb-2">Oops!</span>
      <span>Sorry, an unexpected error has occured.</span>
      <span className="font-[75] text-gray-500">404 Page not found</span>
      <Link to={"/"}>
        <span className="absolute -translate-x-[50%] bottom-5 underline text-gray-400">
          Back to home
        </span>
      </Link>
    </div>
  );
}
