import React from "react";
import { Link } from "react-router-dom";
import PLACEHOLDER from "../assets/placeholder.png";

interface PropertyInfo {
  id: number;
  address: string;
}

const TEMP_IMAGE =
  "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2970&q=80";

const TEMP_IMAGE2 =
  "https://smaller-pictures.appspot.com/images/dreamstime_xxl_65780868_small.jpg";

export default function PropertyCard(props: PropertyInfo) {
  return (
    <div className="PropertyCard">
      <Link to={`/property/${props.id}/`}>
        <div className="w-full overflow-hidden bg-white rounded-lg shadow">
          <img
            className="w-full h-[200px] object-cover object-center"
            src={TEMP_IMAGE}
            alt="No property image"
          ></img>
          <div className="border rounded-lg border-cardBorder">
            <div className="px-6 py-4">
              <div className="flex items-center gap-1 mb-3 text-2xl font-bold text-primary">
                £5,555
                <span className="text-sm font-medium text-gray-400">
                  /month
                </span>
              </div>
              <div className="grid gap-1.5">
                <div className="text-2xl font-bold">Westerville Street</div>
                <p className="text-base font-medium text-gray-400">
                  7938 Jockey Hollow Dr.Pewaukee
                </p>
              </div>
              <div className="flex gap-6 pt-5 mt-4 border-t-2 border-cardBorder">
                <div>Bathrooms: 2</div>
                <div>Bedrooms: 2</div>
                <div>Type: Leasing</div>
              </div>
            </div>
            {/* <div className="border-t border-cyan-600 rounded-5"></div>
            <div className="grid justify-center grid-cols-3 py-6 quickInfo">
              <div className="col-span-1 bathrooms">Bathrooms:</div>
              <div className="col-span-1 bedrooms">Bedrooms:</div>
              <div className="col-span-1">Type: </div>
            </div> */}
          </div>
        </div>
      </Link>
    </div>
  );
}
