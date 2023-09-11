import { Link } from "react-router-dom";

export default function Navbar() {
  const menuStyles =
    "hover:text-cyan-600 transition-colors text-base px-4 py-3";

  return (
    <ul className="flex gap-8 mb-5 w-full bg-white h-[95px] items-center px-10">
      <li className={menuStyles}>
        <Link to={`/`}>Home</Link>
      </li>
      <li className={menuStyles}>
        <Link to={`/rent/`}>Rent</Link>
      </li>
      <li className={menuStyles}>
        <Link to={`/buy/`}>Buy</Link>
      </li>
      <li className={menuStyles}>
        <Link to={`/property/12/`}>Property 12</Link>
      </li>
    </ul>
  );
}
