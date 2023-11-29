import Button from "../Components/Button";
import PropertyCard from "../Components/PropertyCard";
import PropertyInformation from "../Components/PropertyInformation";
import ListingDetails from "../Components/ListingDetails";
import AdditionalInformation from "../Components/AdditionalInformation";
import PhotosForm from "../Components/PhotosForm";
import StatusForm from "../Components/StatusForm";

export default function PropertyAdd() {
  return (
    <div className="px-4 m-auto pb-28 0 max-w-7xl lg:pt-14 lg:pb-14">
      <div className="w-full">
        <div className="items-center justify-between hidden lg:flex">
          <div>
            <h1 className="mb-1 text-4xl font-bold">Add Property</h1>
            <p className="text-base font-light text-neutral-500">
              Add details for your new property, including property type,
              location, price
            </p>
          </div>
          <div className="flex gap-5 py-4">
            <Button type="">Cancel</Button>
            <Button>Create</Button>
          </div>
        </div>
        <div className="fixed bottom-0 left-0 grid justify-between w-full grid-cols-2 gap-5 px-5 py-4 bg-white border-t border-gray-300 lg:hidden ">
          <div className="flex flex-col justify-center">
            <h1 className="text-xl font-bold">Add Property</h1>
            <p className="text-sm font-light text-neutral-500">
              Add details for your new property, including property type,
              location, price
            </p>
          </div>
          <div className="flex items-center justify-end gap-4 py-3 text-xs">
            <div className="flex flex-col-reverse w-full gap-4">
              <Button type="">Cancel</Button>
              <Button>Create</Button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-7 py-7 md:flex-row lg:flex-row">
        <div className="flex flex-col left-side gap-7">
          <PropertyCard id={10} address="Addres goes here" />
          <PhotosForm />
          <StatusForm />
        </div>
        <div className="flex flex-col right-side gap-7">
          <PropertyInformation />
          <ListingDetails />
          <AdditionalInformation />
        </div>
      </div>
    </div>
  );
}
