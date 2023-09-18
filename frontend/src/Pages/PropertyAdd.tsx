import React from "react";
import PropertyForm from "../Components/PropertyForm";

export default function PropertyAdd() {
  return (
    <div className="PropertyAdd grid gird-cols-12 justify-center">
      <h1 className="text-4xl col-start-1 col-span-4">Property form</h1>
      <PropertyForm/>
    </div>
  );
}
