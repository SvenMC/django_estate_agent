import { InputField, InputSelect } from "./Fields";

enum LetterRating {
  A = "A",
  B = "B",
  C = "C",
  D = "D",
  E = "E",
  F = "F",
  G = "G",
  H = "H",
  I = "I",
}

export default function AdditionalInformation({ handleChange }: any) {
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
        <form>
          <div className="grid grid-cols-2 gap-4">
            <div className="grid w-full grid-cols-3 col-span-2 gap-4">
              <InputField
                name="tenure"
                label="Tenure"
                required={false}
                onChange={handleChange}
              />
              <InputField
                name="groundRent"
                label="Ground rent"
                required={false}
                onChange={handleChange}
              />
              <InputField
                name="annualServiceCharge"
                label="Annual service charge"
                required={false}
                onChange={handleChange}
              />
            </div>
            <div className="grid w-full grid-cols-3 col-span-2 gap-4">
              <InputField
                name="leaseDuration"
                label="Lease duration"
                required={false}
                onChange={handleChange}
              />
              <InputSelect
                name="councilTaxBand"
                label="Council tax band"
                options={[
                  LetterRating.A,
                  LetterRating.B,
                  LetterRating.C,
                  LetterRating.D,
                  LetterRating.E,
                  LetterRating.F,
                  LetterRating.G,
                  LetterRating.H,
                  LetterRating.I,
                ]}
                onChange={handleChange}
              />
              <InputSelect
                name="epcRating"
                label="EPC Rating"
                options={[
                  LetterRating.A,
                  LetterRating.B,
                  LetterRating.C,
                  LetterRating.D,
                  LetterRating.E,
                  LetterRating.F,
                  LetterRating.G,
                ]}
                onChange={handleChange}
              />
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
