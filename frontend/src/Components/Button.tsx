import React from "react";

export default function Button({ type = "primary", onClick, children }: any) {
  return (
    <button
      className={`lg:px-5 lg:py-3 py-2 px-4 font-semibold border rounded ${
        type ? "border-primary bg-primary text-white" : "bg-white text-primary"
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
