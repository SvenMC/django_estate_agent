import Button from "../Components/Button";
import PropertyCard from "../Components/PropertyCard";
import PropertyInformation from "../Components/PropertyInformation";
import ListingDetails from "../Components/ListingDetails";
import AdditionalInformation from "../Components/AdditionalInformation";
import PhotosForm from "../Components/PhotosForm";
import StatusForm from "../Components/StatusForm";

export default function PropertyAdd() {
  return (
    <div className="px-4 m-auto max-w-7xl py-14">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="mb-1 text-4xl font-bold">Add Property</h1>
          <p className="text-base font-light text-neutral-500">
            Add details for your new property, including property type,
            location, price
          </p>
        </div>
        <div className="flex gap-5">
          <Button type="">Cancel</Button>
          <Button>Create</Button>
        </div>
      </div>
      <div className="flex flex-col gap-7 py-7 md:flex-row lg:flex-row">
        <div className="flex-1 left-side min-w-[500px] flex flex-col gap-7">
          <PropertyCard id={10} address="Addres goes here" />
          <PhotosForm />
          <StatusForm />
        </div>
        <div className="flex flex-col flex-auto right-side gap-7">
          <PropertyInformation />
          <ListingDetails />
          <AdditionalInformation />
        </div>
      </div>
    </div>
  );
}
