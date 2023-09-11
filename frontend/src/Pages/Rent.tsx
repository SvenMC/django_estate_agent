import React from "react";
import PropertyIndex from "../Components/PropertyIndex";

export default function Rent() {
  const propertyType: string = "rent";

  return <PropertyIndex propertyType={propertyType} />;
}
