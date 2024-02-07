import { Link } from "react-router-dom";
import {
  MdOutlineBed,
  MdOutlineBathtub,
  MdFavorite,
  MdOutlineDescription,
} from "react-icons/md";
import "swiper/css";
import "swiper/css/navigation";
import { BsStars } from "react-icons/bs";
import DefaultImage from "../../assets/placeholder.jpg";

export default function PropertyCardSmall(props: any) {
  return (
    <div className="PropertyCardSmall" id="property_card">
      <Link to={`/property/${props.id}/`}>
        <div className="w-full transition-colors bg-white rounded-lg shadow">
          <div className="rounded-t-lg h-[220px]">
            <img
              src={DefaultImage}
              alt="testboom"
              className="object-cover object-center w-full h-full rounded-t-lg"
            />
          </div>
          <div className="relative border rounded-b-lg border-cardBorder">
            <div
              style={{ top: "calc(0px - 16px)" }}
              className="absolute z-30 -left-3"
            >
              <div className="flex items-center h-8 gap-1 pl-5 pr-4 text-[13px] font-semibold text-white uppercase rounded-r-lg rounded-tl-lg bg-primary">
                <BsStars size={12} />
                New Listing
              </div>
              <div className="inline-block overflow-hidden w-[11px]">
                <div className="h-16 origin-top-left transform -rotate-45 bg-tertiary "></div>
              </div>
            </div>
            <div className="px-6 py-4 pt-6">
              <div className="flex items-center">
                <div className="flex items-center flex-1 gap-1 text-2xl font-bold text-primary">
                  £5000.00
                  <span className="text-sm font-medium text-gray-400">
                    month
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
                  <div className="text-2xl font-bold text-black">
                    Westerville Street
                  </div>
                  <p className="text-base font-normal text-gray-400">
                    7938 Jockey Hollow Dr.Pewaukee
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-6 pt-5 mt-4 border-t-2 border-cardBorder">
                <div className="flex items-center gap-2 text-sm font-medium text-gray-500">
                  <MdOutlineBed size={24} className="text-primary" />2 Beds
                </div>
                <div className="flex items-center gap-2 text-sm font-medium text-gray-500">
                  <MdOutlineBathtub size={24} className="text-primary" />2
                  Bathrooms
                </div>
                <div className="flex items-center gap-2 text-sm font-medium text-gray-500">
                  <MdOutlineDescription size={24} className="text-primary" />
                  5x7m
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
