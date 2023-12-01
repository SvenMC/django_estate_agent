import axios from "axios";
import React from "react";
import { InputField, InputSelect, InputTextArea } from "./Fields";

export default function PropertyInformation({ handleChange }: any) {
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

        <form>
          <div className="grid grid-cols-2 gap-4">
            <InputField
              name="title"
              label="Title"
              type="text"
              placeholder="Name of the Property"
              required={false}
              onChange={handleChange}
            />
            <InputField
              name="address"
              label="Address"
              type="text"
              placeholder="10 Downing Street, SW1A 2AA"
              required={false}
              onChange={handleChange}
            />
            <div className="col-span-2">
              <InputTextArea
                name="description"
                label="Description"
                placeholder="Your property description"
                onChange={handleChange}
              />
            </div>
            <div className="grid w-full grid-cols-3 col-span-2 gap-4">
              <InputField
                name="bedrooms"
                label="No. of Bedrooms"
                type="number"
                required={false}
                onChange={handleChange}
              />
              <InputField
                name="bathrooms"
                label="No. of Bathrooms"
                type="number"
                required={false}
                onChange={handleChange}
              />
              <InputField
                name="dimensions"
                label="Dimensions"
                type="text"
                required={false}
                onChange={handleChange}
              />
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
