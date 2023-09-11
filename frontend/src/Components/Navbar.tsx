import React from "react";
import LOGO from "../assets/LOGO.png";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const menuStyles =
    "hover:text-cyan-600 transition-colors text-base px-4 py-3 rounded-md";

  const activeStyles = "text-primary bg-secondary font-semibold";

  return (
    <div className="flex mb-5 w-full bg-white h-[95px] items-center px-10 drop-shadow-sm">
      <NavLink to={`/`} className="mr-6 h-100">
        <img src={LOGO} alt="logo" className="h-[41px]" />
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
