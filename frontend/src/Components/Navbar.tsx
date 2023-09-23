import React from "react";
import LOGO from "../assets/LOGO.png";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const menuStyles =
    "hover:text-cyan-600 transition-colors text-base px-4 py-3 rounded-md flex items-center";
  const activeStyles =
    "text-primary bg-secondary transition-colors duration-300";

  return (
    <div className="flex w-full bg-white h-[95px] items-center px-10 drop-shadow-sm">
      <NavLink to={`/`} className="mr-6 h-100">
        <img src={LOGO} alt="logo" className="h-[41px] max-w-none" />
      </NavLink>
      <div className="flex flex-1 gap-8">
        <NavLink
          to={`/`}
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? `${activeStyles} ${menuStyles}`
              : menuStyles
          }
        >
          Home
        </NavLink>
        <NavLink
          to={`/rent/`}
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? `${activeStyles} ${menuStyles}`
              : menuStyles
          }
        >
          Rent
        </NavLink>
        <NavLink
          to={`/buy/`}
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? `${activeStyles} ${menuStyles}`
              : menuStyles
          }
        >
          Buy
        </NavLink>
        <NavLink
          to={`/property/12/`}
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? `${activeStyles} ${menuStyles}`
              : menuStyles
          }
        >
          Property 12
        </NavLink>
        {/* This is temporary */}
        <NavLink
          to={`/property/add/`}
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? `${activeStyles} ${menuStyles}`
              : menuStyles
          }
        >
          Add Property
        </NavLink>
      </div>
      <div className="flex gap-4">
        <button className="px-6 py-3 font-semibold transition-colors rounded-md bg-secondary text-primary hover:bg-secondaryHover">
          Login
        </button>
        <button className="px-6 py-3 font-semibold text-white transition-colors rounded-md bg-primary hover:bg-primaryHover">
          Sign up
        </button>
      </div>
    </div>
  );
}
