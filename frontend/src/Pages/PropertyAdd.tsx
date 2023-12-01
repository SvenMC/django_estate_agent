import Button from "../Components/Button";
import PropertyCard from "../Components/PropertyCard";
import PropertyInformation from "../Components/PropertyInformation";
import ListingDetails from "../Components/ListingDetails";
import AdditionalInformation from "../Components/AdditionalInformation";
import PhotosForm from "../Components/PhotosForm";
import StatusForm from "../Components/StatusForm";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import base_api from "../config";

interface PropertyFormElements extends HTMLFormControlsCollection {
  address: HTMLInputElement;
  contract: HTMLInputElement;
  description: HTMLInputElement;
}

interface PropertyFormElement extends HTMLFormElement {
  readonly elements: PropertyFormElements;
}

enum PaySchedules {
  Monthly = "MONTHLY",
  Weekly = "WEEKLY",
}

export default function PropertyAdd() {
  const navigate = useNavigate();
  const [propertyForm, setPropertyForm] = useState({
    title: null,
    address: null,
    description: null,
    bedrooms: null,
    bathrooms: null,
    dimensions: null,
    propertyType: null,
    status: null,
    price: null,
    deposit: null,
    contractType: null,
    moveInDate: null,
    paymentSchedule: PaySchedules.Monthly,
    tenure: null,
    groundRent: null,
    annualServiceCharge: null,
    leaseDuration: null,
    councilTaxBand: null,
    epcRating: null,
  });

  const handleSubmit = (event: React.FormEvent<PropertyFormElement>) => {
    event.preventDefault();

    const url = `${base_api}api/properties/`;

    console.log(event);

    axios
      .post(url, {
        address: propertyForm.address,
        description: propertyForm.description,
        contract_type: propertyForm.contractType,
        title: propertyForm.title,
        status: propertyForm.status,
        price: propertyForm.price,
        deposit: propertyForm.deposit,
        move_in_date: propertyForm.moveInDate,
        payment_schedule: propertyForm.paymentSchedule,
        bedrooms: propertyForm.bedrooms,
        bathrooms: propertyForm.bathrooms,
        dimensions: propertyForm.dimensions,
        property_type: propertyForm.propertyType,
        tenure: propertyForm.tenure,
        ground_rent: propertyForm.groundRent,
        annual_service_charge: propertyForm.annualServiceCharge,
        lease_duration: propertyForm.leaseDuration,
        council_tax_band: propertyForm.councilTaxBand,
        epc_rating: propertyForm.epcRating,
      })
      .then(function (response) {
        console.log("HOPE IT GOES WELL");
        console.log(response);
        navigate(`/property/${response.data.id}/`);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleChange = (event: any) => {
    setPropertyForm({
      ...propertyForm,
      [event.target.name]: event.target.value,
    });
  };

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
            <Button onClick={handleSubmit}>Create</Button>
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
              <Button onClick={handleSubmit}>Create</Button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-7 py-7 md:flex-row lg:flex-row">
        <div className="flex flex-col lg:flex-1 left-side gap-7">
          <PropertyCard
            id={10}
            propertyTitle={propertyForm.title}
            propertyAddress={propertyForm.address}
            propertyPrice={propertyForm.price}
            propertyPaymentSchedule={propertyForm.paymentSchedule}
            propertyBedrooms={propertyForm.bedrooms}
            propertyBathrooms={propertyForm.bathrooms}
            propertyDimensions={propertyForm.dimensions}
          />
          {/* <PhotosForm /> */}
          <StatusForm handleChange={handleChange} />
        </div>
        <div className="flex flex-col right-side gap-7">
          <PropertyInformation handleChange={handleChange} />
          <ListingDetails handleChange={handleChange} />
          <AdditionalInformation handleChange={handleChange} />
        </div>
      </div>
    </div>
  );
}
