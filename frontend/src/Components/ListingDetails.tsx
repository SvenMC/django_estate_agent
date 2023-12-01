import { InputField, InputSelect } from "./Fields";

export default function ListingDetailsForm({ handleChange }: any) {
  return (
    <section className="bg-white border border-gray-300 rounded-lg shadow-sm">
      <div className="p-6 mx-auto ">
        <div className="mb-5">
          <h2 className="text-xl font-semibold text-gray-900">
            Listing Details
          </h2>
          <p className="text-sm font-light text-neutral-400">
            Essential details for the listing, such a contract type, price,
            etc...
          </p>
        </div>

        <form>
          <div className="grid grid-cols-2 gap-4">
            <div className="grid w-full grid-cols-3 col-span-2 gap-4">
              <InputField
                name="price"
                label="Price"
                type="number"
                required={false}
                onChange={handleChange}
              />
              <InputField
                name="deposit"
                label="Deposit"
                type="number"
                required={false}
                onChange={handleChange}
              />
              <InputSelect
                name="contractType"
                label="Contract Type"
                options={["RENT", "BUY"]}
                onChange={handleChange}
              />
            </div>
            <div className="grid w-full grid-cols-3 col-span-2 gap-4">
              <InputSelect
                name="propertyType"
                label="Property Type"
                options={[
                  "DETACHED",
                  "SEMI_DETACHED",
                  "TERRACED",
                  "FLAT",
                  "BUNGALOW",
                  "LAND",
                  "FARM",
                ]}
                onChange={handleChange}
              />
              <InputField
                name="moveInDate"
                label="Move-in Date"
                type="string"
                required={false}
                onChange={handleChange}
              />
              <InputSelect
                name="paymentSchedule"
                label="Payment schedule"
                options={["MONTHLY", "WEEKLY"]}
                onChange={handleChange}
              />
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
