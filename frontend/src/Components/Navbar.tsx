import { useEffect, useState } from "react";
import LOGO from "../assets/logos/LOGO.png";
import { NavLink } from "react-router-dom";
import MenuIcon from "../assets/menu.svg";
import CloseIcon from "../assets/close.svg";

const menuStyles =
  "hover:text-cyan-600 transition-all lg:text-base text-lg px-4 py-3 rounded-md flex items-center";
const activeStyles = "text-primary bg-secondary transition-all duration-300";

export default function Navbar() {
  return (
    <>
      <DesktopNavbar />
      <MobileNavbar />
    </>
  );
}

function DesktopNavbar() {
  return (
    <div className="hidden lg:flex w-full bg-white h-[95px] items-center px-10 drop-shadow-sm">
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

function MobileNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenu = (value: boolean) => {
    // Hides and Shows the MobileNavbar //
    setIsMenuOpen(value);
    var Card = document.getElementsByClassName("PropertyCard");
    if (value) {
      document.body.style.overflow = "hidden";
      for (let i = 0; i < Card.length; i++) {
        Card[i]?.classList.add("-z-10"); // Sets the Z-Index of the PropertyCard to -10 to prevent popping up when menu is open
      }
    } else {
      document.body.style.overflow = "unset";
      for (let i = 0; i < Card.length; i++) {
        Card[i]?.classList.remove("-z-10"); // Removes Z-Index when menu is closed
      }
    }
  };

  useEffect(() => {
    setIsMenuOpen(false);
  }, []);

  return (
    <div className="flex justify-between lg:hidden w-full bg-white h-[95px] items-center px-10 drop-shadow-sm">
      <NavLink to={`/`} className="mr-6 h-100">
        <img src={LOGO} alt="logo" className="h-[41px] max-w-none" />
      </NavLink>
      <button onClick={() => handleMenu(true)}>
        <img src={MenuIcon} alt="Menu button" />
      </button>
      {isMenuOpen && (
        <div className="fixed top-0 left-0 flex items-start justify-between w-full h-screen px-10 bg-white py-9">
          <div>
            <div className="flex flex-col gap-8">
              <NavLink
                to={`/`}
                onClick={() => handleMenu(false)}
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
                onClick={() => handleMenu(false)}
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
                onClick={() => handleMenu(false)}
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
              {/* This is temporary */}
              <NavLink
                to={`/property/add/`}
                onClick={() => handleMenu(false)}
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
          </div>
          <button onClick={() => handleMenu(false)}>
            <img src={CloseIcon} alt="close button" />
          </button>
        </div>
      )}
    </div>
  );
}
