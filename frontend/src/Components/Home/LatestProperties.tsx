import Button from "../Button";
import PropertyCardSmall from "./PropertyCardSmall";

export default function LatestProperties() {
  return (
    <section className="flex items-center bg-inherit bg-white pt-[150px] pb-10">
      <div className="flex flex-col items-center justify-center max-w-screen-xl gap-10 mx-auto md:flex-row">
        <div className="flex-1">
          <h1 className="text-[40px] text-center font-bold leading-[48px] mb-9">
            Most recent listings
          </h1>
          <div className="grid justify-between grid-cols-3 gap-12 mb-14">
            <PropertyCardSmall />
            <PropertyCardSmall />
            <PropertyCardSmall />
            <PropertyCardSmall />
            <PropertyCardSmall />
            <PropertyCardSmall />
          </div>
          <div className="justify-center max-w-sm gap-3 mx-auto">
            <p className="text-xl font-medium text-center">
              Want to see more listings?
            </p>
            <div className="py-4 text-center">
              <Button className="rounded-lg text-md">Show more</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
