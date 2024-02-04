import HouseVector from "../../assets/Home/Welcome/House_Icon.svg";

export default function WelcomeSection() {
  return (
    <section className="flex items-center bg-white py-[150px]">
      <div className="flex items-center justify-center max-w-screen-xl gap-10 mx-auto">
        <div className="flex-1">
          <h1 className="text-[40px] font-bold leading-[48px] mb-4">
            Welcome to <br />
            HeadStart Properties!
          </h1>
          <p className="leading-[38px] text-lg tracking-tight text text-slate-600 text-justify">
            With over <span className="font-bold text-primary">25 years</span>{" "}
            in the lettings industry, Headstart Properties, excels in property
            and portfolio management, offering unparalleled, efficient, and
            personal service.
            <br />
            <br /> Our focus on detail, clear communication, and professionalism
            ensures landlords and quality tenants consistently choose us for
            exceptional letting experiences.
          </p>
        </div>
        <div>
          <img src={HouseVector} alt="something" />
        </div>
      </div>
    </section>
  );
}
