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
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <img
            className="w-full"
            src={PLACEHOLDER}
            alt="Sunset in the mountains"
          ></img>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{props.address}</div>
            <p className="text-gray-700 text-base">{props.id}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
