import React from "react";

export default function Button({ type = "primary", children }: any) {
  return (
    <button
      className={`px-5 py-3 font-semibold border rounded ${
        type ? "border-primary bg-primary text-white" : "bg-white text-primary"
      }`}
    >
      {children}
    </button>
  );
}
