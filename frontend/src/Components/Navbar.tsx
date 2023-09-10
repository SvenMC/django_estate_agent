import { Link } from "react-router-dom";
import PropertyIndex from "../Components/PropertyIndex";

export default function Navbar() {
  return (
    <ul>
      <li><Link to={`/`}>Home</Link></li>
      <li><Link to={`/rent/`}>Rent</Link></li>
      <li><Link to={`/buy/`}>Buy</Link></li>
      <li><Link to={`/property/12/`}>Property 12</Link></li>
    </ul>
  );
}
