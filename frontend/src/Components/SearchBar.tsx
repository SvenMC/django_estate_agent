import ArrowIcon from "../assets/chevron-down.svg";
import CalendarIcon from "../assets/calendar-month.svg";
import Button from "./Button";

export default function SearchBar() {
  return (
    <div
      id="SearchBar"
      // className={`sticky top-0 z-50 h-full mb-12 bg-blue-100 shadow-sm`}
    >
      <div className="justify-between hidden max-w-screen-xl px-8 py-5 mx-auto bg-white rounded-lg shadow-sm lg:flex">
        <LocationFilter />
        <MoveInFilter />
        <PriceFilter />
        <PropertyTypeFilter />
        <Button>Search</Button>
      </div>
    </div>
  );
}

const FilterItemStyles = "border-gray-300 h-full";

function LocationFilter() {
  return (
    <div className={FilterItemStyles}>
      <span className="font-medium text-gray-400">Location</span>
      <p className="text-lg font-semibold text-black">Marylebone, W1U</p>
    </div>
  );
}

function MoveInFilter() {
  return (
    <div className={FilterItemStyles}>
      <span className="font-medium text-gray-400">When</span>
      <div className="flex items-center gap-5">
        <p className="text-lg font-semibold text-black">Select Move-in Date</p>
        <div className="flex items-center justify-center w-5 h-5 rounded-full bg-secondary">
          <img src={CalendarIcon} alt="calendar icon" />
        </div>
      </div>
    </div>
  );
}

function PriceFilter() {
  return (
    <div className={FilterItemStyles}>
      <span className="font-medium text-gray-400">Price</span>
      <div className="flex items-center gap-5">
        <p className="text-lg font-semibold text-black">£500 - £2,500</p>
        <div className="flex items-center justify-center w-5 h-5 rounded-full bg-secondary">
          <img src={ArrowIcon} alt="calendar icon" />
        </div>
      </div>
    </div>
  );
}

function PropertyTypeFilter() {
  return (
    <div className={FilterItemStyles}>
      <span className="font-medium text-gray-400">Property Type</span>
      <div className="flex items-center gap-5">
        <p className="text-lg font-semibold text-black">Houses</p>
        <div className="flex items-center justify-center w-5 h-5 rounded-full bg-secondary">
          <img src={ArrowIcon} alt="calendar icon" />
        </div>
      </div>
    </div>
  );
}
