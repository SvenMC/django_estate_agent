import HeroBanner from "../Components/Home/HeroBanner";
import LatestProperties from "../Components/Home/LatestProperties";
import ServiceSection from "../Components/Home/ServiceSection";
import WelcomeSection from "../Components/Home/WelcomeSection";

export default function Home() {
  return (
    <div className="Home">
      <HeroBanner />
      <WelcomeSection />
      <ServiceSection />
      <LatestProperties />
      {/* <h1 className="text-4xl">Home page</h1> */}
      {/* <MapIndex/> */}
    </div>
  );
}
