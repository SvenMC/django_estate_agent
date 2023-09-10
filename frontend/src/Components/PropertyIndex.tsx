import React, { useEffect, useState } from "react";
import axios from "axios";
import base_api from "../config";
import { Link, useParams } from "react-router-dom";

export default function PropertyIndex(props: { propertyType: string; }) {
  const [PropertyIndexItems, setPropertyIndexItems] = useState<PropertyIndexItems[]>();
  let propertyType = props.propertyType;

  useEffect(() => {
    const url = `${base_api}api/${propertyType}/`;

    axios
      .get<PropertyIndex>(url)
      .then(function (response) {
        setPropertyIndexItems(response.data.results);
      })
      .catch(function (error) {
        setPropertyIndexItems([]);
      });
  }, []);

  return (
    <div className="PropertyIndex">
      <ul>
        {PropertyIndexItems &&
          PropertyIndexItems.map((property, id) => {
            return (
              <li key={id}>
                <Link to={`/property/${property.id}/`}>{property.address}</Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
}