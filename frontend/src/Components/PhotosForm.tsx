import ImageAddIcon from "../assets/image-plus.svg";

export default function PhotosForm() {
  return (
    <section className="bg-white border border-gray-300 rounded-lg shadow-sm">
      <div className="p-6 mx-auto ">
        <div className="flex items-start justify-between mb-5">
          <div>
            <h2 className="mb-1 text-xl font-semibold text-gray-900">Photos</h2>
            <p className="text-sm font-light text-neutral-400">
              Add up to 20 photos of the property
            </p>
          </div>
          <p className="pt-1 text-sm font-light text-neutral-400">
            0/20 Photos
          </p>
        </div>
        <div className="min-h-[176px] flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-md text-sm">
          <img src={ImageAddIcon} alt="image add icon" />
          <span className="mt-3">
            Drag and drop or&nbsp;
            <a href="#" className="text-primary">
              browse
            </a>
          </span>
        </div>
        <p className="pt-6 pb-2 text-sm font-light text-center text-gray-400">
          Supports: JPEG, JPG, PNG
        </p>
      </div>
    </section>
  );
}
