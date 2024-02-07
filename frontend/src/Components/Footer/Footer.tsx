import ArlaIcon from "../../assets/logos/ARLA.png";
import DPSIcon from "../../assets/logos/DPS.png";
import OMBUDSMANIcon from "../../assets/logos/OMBUDSMAN.svg";
import RightmoveIcon from "../../assets/logos/Rightmove.png";
import RLAIcon from "../../assets/logos/RLA.png";
import ContactForm from "./Components/ContactForm";

export default function Footer() {
  return (
    <footer>
      <ContactForm />
      <div className="text-white bg-primary">
        <div className="flex flex-col max-w-screen-xl gap-12 px-10 pt-20 pb-4 mx-auto">
          <div className="grid grid-cols-3">
            <div>
              <h2 className="mb-3 text-xl font-bold">
                HEADSTART PROPERTIES UK LTD
              </h2>
              <p className="text-sm text-justify">
                Headstart Properties UK Ltd are a dedicated letting and property
                management agent that offers an efficient, honest and personal
                service second to none.
              </p>
            </div>
            <div className="flex items-center col-span-2">
              <div className="flex items-center justify-end w-full gap-4">
                <IconContainer image={RLAIcon} alt="test" />
                <IconContainer image={DPSIcon} alt="test" />
                <IconContainer image={ArlaIcon} alt="test" />
                <IconContainer image={RightmoveIcon} alt="test" />
                <IconContainer image={OMBUDSMANIcon} alt="test" />
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <div className="text-xs">
              © Headstart Properties |{" "}
              <a
                className="font-medium"
                href="http://www.headstartpropertiesukltd.co.uk/site/custom/headstartProperties/images/cmp-2023.pdf"
              >
                CMP Certificate (PDF)
              </a>{" "}
              |{" "}
              <a
                className="font-medium"
                href="http://www.headstartpropertiesukltd.co.uk/site/custom/headstartProperties/images/privacy-notice.pdf"
              >
                Privacy (PDF)
              </a>{" "}
              |{" "}
              <a
                className="font-medium"
                href="http://www.headstartpropertiesukltd.co.uk/site/custom/headstartProperties/images/complaints-procedure.pdf"
              >
                Complaints (PDF)
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function IconContainer({ image, alt }: { image: string; alt: string }) {
  return (
    <div className="h-[40px] flex items-center justify-center">
      <img src={image} alt={alt} className="h-full" />
    </div>
  );
}
