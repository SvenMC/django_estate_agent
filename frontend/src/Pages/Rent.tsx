import React, { useEffect, useState } from "react";
import axios from "axios";
import base_api from "../config";
import { Link, useParams } from "react-router-dom";

export default function Rent() {
  const [rentItems, setRentItems] = useState<RentItems[]>();

  useEffect(() => {
    const url = `${base_api}api/rent/`;

    axios
      .get<RentIndex>(url)
      .then(function (response) {
        setRentItems(response.data.results);
      })
      .catch(function (error) {
        setRentItems([]);
      });
  }, []);

  return (
    <div className="Rent">
      <ul>
        {rentItems &&
          rentItems.map((property, id) => {
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
