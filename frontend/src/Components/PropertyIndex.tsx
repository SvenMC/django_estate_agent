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
    <div className="PropertyIndex grid place-items-center">
      <ul>
        {PropertyIndexItems &&
          PropertyIndexItems.map((property, id) => {
            return (
              <li key={id}>
                <PropertyCard id={property.id} address={property.address}/>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
