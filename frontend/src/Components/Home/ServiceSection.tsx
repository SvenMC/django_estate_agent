import PropertiesIcon from "../../assets/Home/Service/properties_man.svg";
import ValuationIcon from "../../assets/Home/Service/valuation_people.svg";
import AlertsIcon from "../../assets/Home/Service/alerts_person.svg";

import Button from "../Button";

const Services = [
  {
    icon: PropertiesIcon,
    title: "Find Properties",
    description:
      "Discover your ideal property easily with our advanced search tools, offering detailed listings and filters for a hassle-free experience.",
  },
  {
    icon: ValuationIcon,
    title: "Request a Valuation",
    description:
      "Obtain a precise valuation of your property from our experts, using the latest market data for accurate and reliable estimates.",
  },
  {
    icon: AlertsIcon,
    title: "Property Alerts",
    description:
      "Receive instant updates on new listings matching your criteria with our tailored property alert system, ensuring you never miss out.",
  },
];

export default function ServiceSection() {
  return (
    <section className="flex z-10 bg-gradient-to-b from-white relative after:bg-[#D9EFF7] after:absolute after:inset-0 after:w-full after:-skew-y-[4deg] after:-z-[1] items-center  py-[150px]">
      <div className="flex items-center justify-center w-full max-w-screen-xl mx-auto">
        <div className="flex flex-row flex-wrap justify-center w-full gap-y-20 gap-x-10 lg:gap-10 lg:flex-nowrap lg:justify-between">
          {Services.map((service, index) => {
            return <ServiceItem key={index + service.title} {...service} />;
          })}
        </div>
      </div>
    </section>
  );
}

function ServiceItem({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="grid max-w-sm text-center justify-items-center">
      <img src={icon} alt={`${icon}-service`} className="mb-12" />
      <h1 className="mb-2 text-3xl font-semibold tracking-tighter">{title}</h1>
      <p className="text-[#001A29]/80 tracking-tighter text-md leading-8">
        {description}
      </p>
      <div className="w-full mt-5">
        <Button className={"w-full"}>Find out more</Button>
      </div>
    </div>
  );
}
