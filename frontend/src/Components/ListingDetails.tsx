import { InputField } from "./Fields";

export default function ListingDetailsForm() {
  const handleSubmit = () => {
    console.log("Hello");
  };

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

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            <div className="grid w-full grid-cols-3 col-span-2 gap-4">
              <InputField name="price" label="Price" required={false} />
              <InputField name="deposit" label="Deposit" required={false} />
              <InputField
                name="contract type"
                label="Contract type"
                required={false}
              />
            </div>
            <InputField name="movein" label="Move-in Date" required={false} />
            <InputField
              name="paymentschedule"
              label="Payment schedule"
              required={false}
            />
          </div>
        </form>
      </div>
    </section>
  );
}
