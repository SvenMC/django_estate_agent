import { InputField, InputTextArea } from "../../Fields";
import MapIcon from "../../../assets/map-marker.svg";
import PhoneIcon from "../../../assets/cellphone.svg";
import EmailIcon from "../../../assets/email-outline.svg";

export default function ContactForm() {
  return (
    <section className="grid items-center max-w-screen-xl gap-12 px-10 py-20 mx-auto md:flex">
      <div className="flex flex-col">
        <div className="flex flex-col">
          <h1 className="mb-3 text-3xl font-bold">Get in Touch</h1>
          <p className="text-sm leading-[27px] text-justify">
            With over <span className="font-bold text-primary">25 Years</span>{" "}
            experience within the lettings industry we specialise in property
            and portfolio management including all aspects of Lettings. We pride
            ourselves on paying close attention to detail, communication,
            professionalism but most of all excellent service which is why
            Landlords and Quality Tenants come back to us time and time again.
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
      <div className="min-w-fit md:min-w-[490px] relative">
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
    </section>
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
