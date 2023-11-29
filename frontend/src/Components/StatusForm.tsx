import { InputSelect } from "./Fields";

export default function StatusForm() {
  return (
    <section className="bg-white border border-gray-300 rounded-lg shadow-sm">
      <div className="p-6 mx-auto ">
        <div className="flex items-start justify-between mb-5">
          <div>
            <h2 className="mb-1 text-xl font-semibold text-gray-900">Status</h2>
            <p className="text-sm font-light text-neutral-400">
              Set the status of the property listing
            </p>
          </div>
          <div className="w-[15px] h-[15px] bg-[#1CD867] rounded-full" />
        </div>
        <div>
          <InputSelect label="" options={["Published", "Unpublished"]} />
        </div>
      </div>
    </section>
  );
}
