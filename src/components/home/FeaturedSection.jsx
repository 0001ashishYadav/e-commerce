import React from "react";

const FeaturedSection = () => {
  return (
    <section className="h-[130vh] md:h-[90vh] max-w-7xl mx-auto">
      {/* title */}
      <div className="flex gap-2 items-center">
        <div className="h-8 w-4 rounded bg-red-400"></div>
        <p className="text-red-400 font-semibold">Featured</p>
      </div>

      <div className="md:w-[50%] my-8">
        <p className="text-2xl font-semibold">New Arrival</p>
      </div>

      {/* content sec */}

      <div className="h-[78%] flex flex-col md:flex-row gap-2 md:gap-0 justify-between items-center">
        {/* left con */}

        <div className="h-[100%] w-[95%] md:w-[49%] bg-[#0D0D0D] flex justify-center items-end relative">
          <img className="h-[80%]" src="/heroNewArrivalAssets/ps5-slim.png" />

          {/* content sec */}
          <div className="absolute md:w-[40%] bottom-5 md:bottom-10 left-5 md:left-10 text-gray-200">
            <p className="text-2xl font-semibold">Play Station 5</p>
            <p className="my-2">
              Black and White version of the PS5 coming out on sale.
            </p>

            <button className="border-b-2 text-[10px] px-1">Shop Now</button>
          </div>
        </div>
        {/* right con */}

        <div className="h-[100%] w-[95%] md:w-[49%] flex flex-col gap-2 md:gap-6">
          {/* upper con */}

          <div className="h-[48%] bg-[#0D0D0D] flex justify-center items-center">
            {/* content sec */}
            <div className="w-[50%] text-gray-200 pl-4 md:pl-10 md:pt-16">
              <p className="md:text-2xl font-semibold">Women's Collection</p>
              <p className="my-2 text-[10px] md:text-sm">
                Featured woman collections that give you another vibe.
              </p>

              <button className="border-b-2 text-[10px] px-1">Shop Now</button>
            </div>

            {/* image sec */}

            <div className="h-[100%] w-[50%]">
              <img
                className="h-[100%]"
                src="/heroNewArrivalAssets/attractive-woman.png"
              />
            </div>
          </div>

          {/* lower con */}

          <div className="h-[48%] flex justify-between">
            {/* left con */}

            <div className="h-[100%] w-[48%] bg-[#0D0D0D] relative flex justify-center items-center">
              <img
                className="h-[80%]"
                src="/heroNewArrivalAssets/amazon-echo.png"
              />

              {/* content sec */}
              <div className="absolute bottom-4 md:bottom-5 left-4 md:left-5 text-gray-200">
                <p className="md:text-2xl font-semibold">Speakers</p>
                <p className="md:my-2 text-gray-100 text-[10px] md:text-sm">
                  Amazon wireless speakers
                </p>

                <button className="border-b-2 text-[10px] px-1">
                  Shop Now
                </button>
              </div>
            </div>
            {/* right con */}

            <div className="h-[100%] w-[48%] bg-[#0D0D0D] relative flex justify-center items-center">
              <img
                className="h-[80%]"
                src="/heroNewArrivalAssets/gucci-perfume.png"
              />

              {/* content sec */}
              <div className="absolute bottom-5 left-5 text-gray-200">
                <p className="md:text-2xl font-semibold">Perfume</p>
                <p className="md:my-2 text-gray-100 text-[10px] md:text-[12px]">
                  GUCCI INTENSE OUD EDP
                </p>

                <button className="border-b-2 text-[10px] px-1">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
