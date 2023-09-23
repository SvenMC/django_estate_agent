import React from "react";
import { Link } from "react-router-dom";
import {
  MdOutlineBed,
  MdOutlineBathtub,
  MdFavorite,
  MdOutlineDescription,
} from "react-icons/md";

import { BsStars } from "react-icons/bs";

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
        <div className="relative w-full transition-colors bg-white rounded-lg shadow">
          <img
            className="w-full h-[200px] object-cover object-center rounded-t-lg border"
            src={TEMP_IMAGE}
            alt="No property image"
          ></img>
          <div className="relative border rounded-b-lg border-cardBorder">
            <div
              style={{ top: "calc(0px - 16px)" }}
              className="absolute -left-3"
            >
              <div className="flex items-center h-8 gap-1 pl-5 pr-4 text-[13px] font-semibold text-white uppercase rounded-r-lg rounded-tl-lg bg-primary">
                <BsStars size={12} />
                New Listing
              </div>
              <div className="inline-block overflow-hidden w-[11px]">
                <div className="h-16 origin-top-left transform -rotate-45 bg-tertiary "></div>
              </div>
            </div>
            <div className="px-6 py-4">
              <div className="flex items-center">
                <div className="flex items-center flex-1 gap-1 text-2xl font-bold text-primary">
                  £5,555
                  <span className="text-sm font-medium text-gray-400">
                    /month
                  </span>
                </div>
                <div>
                  <div className="flex items-center justify-center w-12 h-12 transition-colors border-2 rounded-full text-primary hover:text-white border-primary hover:bg-primary">
                    <MdFavorite size={24} />
                  </div>
                </div>
              </div>

              <div className="grid gap-1.5">
                <div className="text-2xl font-bold">Westerville Street</div>
                <p className="text-base font-normal text-gray-400">
                  7938 Jockey Hollow Dr.Pewaukee
                </p>
              </div>
              <div className="flex gap-6 pt-5 mt-4 border-t-2 border-cardBorder">
                <div className="flex items-center gap-2 text-sm font-medium text-gray-500">
                  <MdOutlineBed size={24} className="text-primary" />2 Beds
                </div>
                <div className="flex items-center gap-2 text-sm font-medium text-gray-500">
                  <MdOutlineBathtub size={24} className="text-primary" />2
                  Bathrooms
                </div>
                <div className="flex items-center gap-2 text-sm font-medium text-gray-500">
                  <MdOutlineDescription size={24} className="text-primary" />
                  Type goes here
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
