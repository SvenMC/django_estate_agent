import { useEffect, useState } from "react";
import axios from "axios";
import base_api from "../config";
import { Link } from "react-router-dom";
import React from "react";
import {
  PropertyIndexTypes,
  PropertyIndexItemsTypes,
} from "../Types/PropertyIndex";
import PropertyCard from "./PropertyCard";

interface PropsType {
  propertyType: string;
}

export default function PropertyIndex(props: PropsType) {
  const [PropertyIndexItems, setPropertyIndexItems] =
    useState<PropertyIndexItemsTypes[]>();
  let propertyType = props.propertyType;

  useEffect(() => {
    const url = `${base_api}api/${propertyType}/`;

    axios
      .get<PropertyIndexTypes>(url)
      .then(function (response) {
        setPropertyIndexItems(response.data.results);
      })
      .catch(function (error) {
        setPropertyIndexItems([]);
      });
  }, [props, propertyType]);

  return (
    <div className="grid justify-center max-w-screen-xl grid-cols-1 px-6 py-12 mx-auto gap-y-8 gap-x-8 lg:grid-cols-2 PropertyIndex">
      {PropertyIndexItems &&
        PropertyIndexItems.map((property, id) => {
          return (
            <PropertyCard
              id={property.id}
              key={id}
              propertyTitle={property.title}
              propertyAddress={property.address}
              propertyPrice={property.price}
              propertyBathrooms={property.bathrooms}
              propertyBedrooms={property.bedrooms}
              propertyDimensions={property.dimensions}
            />
          );
        })}
    </div>
  );
}
