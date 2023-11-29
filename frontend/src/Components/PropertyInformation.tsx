import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import base_api from "../config";
import { InputField, InputSelect, InputTextArea } from "./Fields";
interface PropertyFormElements extends HTMLFormControlsCollection {
  address: HTMLInputElement;
  contract: HTMLInputElement;
  description: HTMLInputElement;
}

interface PropertyFormElement extends HTMLFormElement {
  readonly elements: PropertyFormElements;
}

export default function PropertyInformation() {
  const navigate = useNavigate();

  function handleSubmit(event: React.FormEvent<PropertyFormElement>) {
    event.preventDefault();

    const form = event.currentTarget.elements;
    const url = `${base_api}api/properties/`;

    axios
      .post(url, {
        address: form.address.value,
        description: form.description.value,
        contract_type: form.contract.value,
      })
      .then(function (response) {
        navigate(`/property/${response.data.id}/`);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <section className="bg-white border border-gray-300 rounded-lg shadow-sm">
      <div className="p-6 mx-auto ">
        <div className="mb-5">
          <h2 className="text-xl font-semibold text-gray-900">
            Property Information
          </h2>
          <p className="text-sm font-light text-neutral-400">
            General information about the property
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            <InputField
              name="title"
              label="Title"
              placeholder="Name of the Property"
              required={false}
            />
            <InputField
              name="address"
              label="Address"
              placeholder="10 Downing Street, SW1A 2AA"
              required={false}
            />
            <div className="col-span-2">
              <InputTextArea
                label="Description"
                placeholder="Your property description"
              />
            </div>
            <div className="grid w-full grid-cols-3 col-span-2 gap-4">
              <InputField
                name="bedrooms"
                label="No. of Bedrooms"
                required={false}
              />
              <InputField
                name="bathrooms"
                label="No. of Bathrooms"
                required={false}
              />
              <InputField
                name="dimensions"
                label="Dimensions"
                required={false}
              />
            </div>
            <InputSelect label="Contract Type" options={["Rent", "Sale"]} />
          </div>
          <button
            type="submit"
            className="px-5 py-2.5 mt-4 text-md font-medium text-center text-white bg-cyan-500 rounded-lg"
          >
            Add property
          </button>
        </form>
      </div>
    </section>
  );
}
