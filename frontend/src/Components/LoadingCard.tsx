export default function LoadingCard() {
  return (
    <div className="PropertyCard">
      <div className="w-full bg-white rounded-lg shadow">
        <div className="rounded-t-lg h-[300px] is-loading"></div>
        <div className="border border-white rounded-b-lg">
          <div className="px-6 py-4 min-h-[202px] flex flex-col gap-5">
            <div className="h-[32px] is-loading w-full"></div>
            <div className="flex flex-col gap-5">
              <p className="h-[24px] w-1/2 is-loading"></p>
              <div className="flex justify-between">
                <p className="h-[24px] w-1/4 is-loading"></p>
                <p className="h-[24px] w-1/4 is-loading"></p>
              </div>
            </div>
            <p className="h-[18px] w-full is-loading"></p>
          </div>
        </div>
      </div>
    </div>
  );
}
