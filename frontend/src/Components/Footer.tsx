import { InputField, InputTextArea } from "./Fields";
import ArlaIcon from "../assets/logos/ARLA.png";
import DPSIcon from "../assets/logos/DPS.png";
import OMBUDSMANIcon from "../assets/logos/OMBUDSMAN.svg";
import RightmoveIcon from "../assets/logos/Rightmove.png";
import RLAIcon from "../assets/logos/RLA.png";
import MapIcon from "../assets/map-marker.svg";
import PhoneIcon from "../assets/cellphone.svg";
import EmailIcon from "../assets/email-outline.svg";

export default function Footer() {
  return (
    <footer>
      <div className="">
        <div className="flex items-center max-w-screen-xl gap-12 px-10 py-20 mx-auto">
          <div className="flex flex-col">
            <div className="flex flex-col">
              <h1 className="mb-3 text-3xl font-bold">Get in Touch</h1>
              <p className="text-sm leading-[27px] text-justify">
                With over{" "}
                <span className="font-bold text-primary">25 Years</span>{" "}
                experience within the lettings industry we specialise in
                property and portfolio management including all aspects of
                Lettings. We pride ourselves on paying close attention to
                detail, communication, professionalism but most of all excellent
                service which is why Landlords and Quality Tenants come back to
                us time and time again.
              </p>
              <div className="flex flex-col mt-8 gap-7">
                <InfoItem
                  icon={EmailIcon}
                  alt={"Email"}
                  info="randomemail@gmail.com"
                />
                <InfoItem icon={PhoneIcon} alt={"Phone"} info="01482 228298" />
                <InfoItem
                  icon={MapIcon}
                  alt={"Location"}
                  info="Ground Floor, 76 Queen Street, Hull, HU1 1AW"
                />
              </div>
            </div>
          </div>
          <div className=" min-w-[490px] relative">
            <div className="w-full bg-white border shadow-xl rounded-xl">
              <form className="flex flex-col gap-4 px-12 py-12">
                <h3 className="text-2xl font-bold">Send us a Message</h3>
                <InputField name="name" placeholder="Your name" />
                <InputField name="email" placeholder="Your email" />
                <InputTextArea name="message" placeholder="Your message" />
                <button className="py-3 text-white rounded-md bg-primary">
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
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

function InfoItem({
  icon,
  alt,
  info,
}: {
  icon: string;
  alt: string;
  info: string;
}) {
  return (
    <div className="flex items-center gap-5">
      <img src={icon} alt={alt} />
      <p className="text-sm">{info}</p>
    </div>
  );
}

function IconContainer({ image, alt }: { image: string; alt: string }) {
  return (
    <div className="h-[40px] flex items-center justify-center">
      <img src={image} alt={alt} className="h-full" />
    </div>
  );
}
