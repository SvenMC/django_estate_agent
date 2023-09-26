import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  MdOutlineBed,
  MdOutlineBathtub,
  MdFavorite,
  MdOutlineDescription,
} from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { BsStars } from "react-icons/bs";

import DefaultImage from "../assets/placeholder.jpg";

interface PropertyInfo {
  id: number;
  address: string;
}

export default function PropertyCard(props: PropertyInfo) {
  const [isLoading, setIsLoading] = useState<Boolean>(false);
  const [propertyImages, setPropertyImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState<String>("");

  useEffect(() => {
    setIsLoading(true);
    if (propertyImages) {
      setSelectedImage(propertyImages[0]);
      setIsLoading(false);
    }
  }, []);

  return (
    <div className="PropertyCard">
      <Link to={`/property/${props.id}/`}>
        <div className="w-full transition-colors bg-white rounded-lg shadow">
          <div className="rounded-t-lg h-[300px]">
            {propertyImages.length !== 0 ? (
              <Swiper
                navigation={true}
                loop={true}
                modules={[Navigation]}
                onSlideChange={(e: any) => {
                  setSelectedImage(propertyImages[e.realIndex]);
                }}
                className="h-full rounded-t-lg mySwiper"
              >
                {propertyImages &&
                  propertyImages.map((image, id) => {
                    return (
                      <SwiperSlide>
                        <img
                          key={id}
                          src={image}
                          alt="testboom"
                          className="object-cover object-center w-full h-full"
                        />
                      </SwiperSlide>
                    );
                  })}
              </Swiper>
            ) : (
              <img
                src={DefaultImage}
                alt="testboom"
                className="object-cover object-center w-full h-full rounded-t-lg"
              />
            )}
          </div>
          <div className="relative border rounded-b-lg border-cardBorder">
            <div
              style={{ top: "calc(0px - 16px)" }}
              className="absolute z-50 -left-3"
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

              <div className="flex items-end justify-between">
                <div className="grid gap-1.5">
                  <div className="text-2xl font-bold">Westerville Street</div>
                  <p className="text-base font-normal text-gray-400">
                    7938 Jockey Hollow Dr.Pewaukee
                  </p>
                </div>

                <div className="flex gap-2">
                  {propertyImages.map((thumbnail, index) => (
                    <div
                      key={index}
                      className={`bg-gray-500 border-2 ${
                        selectedImage === thumbnail
                          ? "border-primary"
                          : "border-white"
                      } w-9 h-9`}
                    >
                      <img
                        src={thumbnail}
                        alt="image"
                        className="object-cover h-full"
                        onClick={() => setSelectedImage(thumbnail)}
                      />
                    </div>
                  ))}
                </div>
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
