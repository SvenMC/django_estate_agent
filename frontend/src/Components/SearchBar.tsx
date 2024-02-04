import ArrowIcon from "../assets/chevron-down.svg";
import CalendarIcon from "../assets/calendar-month.svg";
import Button from "./Button";

export default function SearchBar() {
  return (
    <div
      id="SearchBar"
      // className={`sticky top-0 z-50 h-full mb-12 bg-blue-100 shadow-sm`}
    >
      <div className="flex items-center justify-between min-h-[104px] max-w-screen-xl mx-auto bg-white px-8 rounded-lg shadow-sm">
        <LocationFilter />
        <Divider />
        <MoveInFilter />
        <Divider />
        <PriceFilter />
        <Divider />
        <PropertyTypeFilter />
        <Divider />
        <Button>Search</Button>
      </div>
    </div>
  );
}

const FilterItemStyles = "border-gray-300";

function Divider() {
  return <div className="w-px h-[48px] border" />;
}

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
