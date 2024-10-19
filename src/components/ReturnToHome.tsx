import React from "react";
import { Link } from "react-router-dom";

export default function ReturnToHome() {
  return (
    <Link to={"/"}>
      <footer className="sticky bottom-5 flex justify-center items-center bg-gray-900 py-2 mt-12">
        <span className="text-center">Back to home</span>
      </footer>
    </Link>
  );
}
