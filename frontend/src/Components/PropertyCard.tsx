import React from "react";
import { Link } from "react-router-dom";
import PLACEHOLDER from "../assets/placeholder.png";

interface PropertyInfo {
  id: number;
  address: string;
}

export default function PropertyCard(props: PropertyInfo) {
  return (
    <div className="p-4 PropertyCard">
      <Link to={`/property/${props.id}/`}>
        <div className="w-full rounded overflow-hidden shadow-lg">
          <img
            className="w-full"
            src={PLACEHOLDER}
            alt="No property image"
          ></img>
          <div className="h-56 px-6 py-4">
            <div className="font-bold text-xl mb-2">{props.address}</div>
            <p className="text-gray-700 text-base">{props.id}</p>
          </div>
          <div className="border-t border-cyan-600 rounded-5"></div>
          <div className="py-6 quickInfo grid grid-cols-3 justify-center">
            <div className="bathrooms col-span-1">Bathrooms:</div>
            <div className="bedrooms col-span-1">Bedrooms:</div>
            <div className="col-span-1">Type: </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
