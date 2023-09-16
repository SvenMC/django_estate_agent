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
    <div className="PropertyIndex grid grid-cols-6 justify-center">
      <div className="col-span-1"></div>
      <div className="col-span-4">
        <div className="grid grid-cols-2">
          {PropertyIndexItems &&
            PropertyIndexItems.map((property, id) => {
              return (
                <PropertyCard id={property.id} address={property.address} />
              );
            })}
        </div>
      </div>
    </div>
  );
}
