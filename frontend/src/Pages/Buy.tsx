import React from "react";
import PropertyIndex from "../Components/PropertyIndex";

export default function Buy() {
  const propertyType: string = "buy";

  return <PropertyIndex propertyType={propertyType} />;
}
