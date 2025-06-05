import React from "react";

const HeroSection = () => {
  return (
    <div className="md:h-[70vh] boredr w-full flex flex-col justify-center items-center md:flex-row md:my-10 my-5 ">
      {/* left sec */}

      <div className="h-full w-full flex justify-center items-center">
        <div className="md:w-[70%] w-[80%]">
          <p className="text-3xl font-semibold mb-8">Our Story</p>

          <p className="text-sm mb-5">
            Launced in 2015, Exclusive is South Asia’s premier online shopping
            makterplace with an active presense in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sallers and 300 brands and serves 3 millioons customers
            across the region.
          </p>

          <p className="text-sm mb-5">
            Exclusive has more than 1 Million products to offer, growing at a
            very fast. Exclusive offers a diverse assotment in categories
            ranging from consumer.
          </p>
        </div>
      </div>

      {/* right sec */}

      <div className="h-full w-full flex justify-center items-center">
        <img
          src="/aboutAssets/aboutHero.png"
          className="h-full w-[95%] md:w-[100%]"
        />
      </div>
    </div>
  );
};

export default HeroSection;
