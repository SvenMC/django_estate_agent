import SearchBar from "../SearchBar";

export default function HeroBanner() {
  return (
    <section className="bg-[url('/src/assets/heroimage.jpg')] bg-cover bg-[center_top]">
      <div className="flex items-center justify-start h-[600px] max-w-screen-xl mx-auto ">
        <div className="flex-1">
          <h1 className="text-6xl font-bold leading-[70px] mb-4">
            Elevating Lettings for
            <br />
            Over <span className="text-primary">25 Years</span>
          </h1>
          <p className="text-xl">Your Premier Property Management Choice.</p>
          <div className="mt-12">
            <SearchBar />
          </div>
        </div>
      </div>
    </section>
  );
}
