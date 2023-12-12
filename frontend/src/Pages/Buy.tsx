import PropertyIndex from "../Components/PropertyIndex";
import SearchBar from "../Components/SearchBar";

export default function Buy() {
  const propertyType: string = "buy";

  return (
    <section className="py-12 mx-auto">
      <div className="flex items-center justify-between max-w-screen-xl mx-auto">
        <h1 className="text-4xl font-bold text-black mb-9">
          Search properties to {propertyType}
        </h1>
      </div>
      <SearchBar />
      <PropertyIndex propertyType={propertyType} />
    </section>
  );
}
