import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import base_api from "../config";
import { InputField } from "./Fields";
interface PropertyFormElements extends HTMLFormControlsCollection {
  address: HTMLInputElement;
  contract: HTMLInputElement;
  description: HTMLInputElement;
}

interface PropertyFormElement extends HTMLFormElement {
  readonly elements: PropertyFormElements;
}

interface inputFiledProps {
  name?: string;
  label?: string;
  placeholder?: string;
  required?: boolean;
}

const inputStyles =
  "block w-full p-3 text-sm text-gray-700 border border-gray-400 rounded outline-2 focus:outline focus:outline-primary";

export default function AdditionalInformation() {
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
            Additional Information
          </h2>
          <p className="text-sm font-light text-neutral-400">
            Additional information
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            <div className="grid w-full grid-cols-3 col-span-2 gap-4">
              <InputField name="tenure" label="Tenure" required={false} />
              <InputField
                name="groundrent"
                label="Ground rent"
                required={false}
              />
              <InputField
                name="annualservicecharge"
                label="Annual service charge"
                required={false}
              />
            </div>
            <div className="grid w-full grid-cols-3 col-span-2 gap-4">
              <InputField
                name="lease"
                label="Lease duration"
                required={false}
              />
              <InputField
                name="counciltaxband"
                label="Council tax band"
                required={false}
              />
              <InputField
                name="EPC Rating"
                label="EPC Rating"
                required={false}
              />
            </div>
            {/* <InputSelect label="Contract Type" options={["Rent", "Sale"]} /> */}
          </div>
          {/* <button
              type="submit"
              className="px-5 py-2.5 mt-4 text-md font-medium text-center text-white bg-cyan-500 rounded-lg"
            >
              Add property
            </button> */}
        </form>
      </div>
    </section>
  );
}
