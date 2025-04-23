import React from "react";
import RatingComponent from "../RatingComponent";

const ThisMonthSection = () => {
  const thisMonthSliderCardContent = [
    {
      proId: "1",
      img: "/heroThisMonthAssets/the-north-coat.png",
      title: "The North Coat",
      dPrice: "$260",
      price: "$360",
      rating: "5",
      ratintCount: "65",
      isAddWishlist: false,
    },
    {
      proId: "2",
      img: "/heroThisMonthAssets/gucci-duffle-bag.png",
      title: "Gucci Duffle Bag",
      dPrice: "$960",
      price: "$1160",
      rating: "4.5",
      ratintCount: "97",
      isAddWishlist: false,
    },
    {
      proId: "3",
      img: "/heroThisMonthAssets/rgb-liquid-cpu-cooler.png",
      title: "RGB Liquied CPU Cooler",
      dPrice: "$160",
      price: "$170",
      rating: "4.5",
      ratintCount: "47",
      isAddWishlist: false,
    },
    {
      proId: "4",
      img: "/heroThisMonthAssets/small-bookself.png",
      title: "Small Bookself",
      dPrice: "$360",
      price: "$380",
      rating: "5",
      ratintCount: "87",
      isAddWishlist: false,
    },
    {
      proId: "5",
      img: "/heroTodayAssets/ak-900-wired-keyboard.png",
      title: "AK 900 wired keyboard",
      dPrice: "$120",
      price: "$1160",
      rating: "4",
      ratintCount: "20",
      isAddWishlist: false,
    },
    {
      proId: "6",
      img: "/heroTodayAssets/hv-g92-gamepad.png",
      title: "Havit HV G92 gamepad",
      dPrice: "$120",
      price: "$160",
      rating: "5",
      ratintCount: "40",
      isAddWishlist: false,
    },
    {
      proId: "7",
      img: "/heroTodayAssets/ips-lcd-gaming-moniter.png",
      title: "IPS LCD gaming moniter",
      dPrice: "$370",
      price: "$400",
      rating: "5",
      ratintCount: "10",
      isAddWishlist: false,
    },
    {
      proId: "8",
      img: "/heroTodayAssets/s-series-comfort-chair.png",
      title: "S Series Comfort Chair",
      dPrice: "$375",
      price: "$400",
      rating: "4.5",
      ratintCount: "60",
      isAddWishlist: false,
    },
  ];
  return (
    <div className="md:h-[80vh] w-[95%] max-w-7xl mx-auto md:my-16 border-b-[1px] border-gray-200">
      {/* title */}
      <div className="flex gap-2 items-center">
        <div className="h-8 w-4 rounded bg-red-400"></div>
        <p className="text-red-400 font-semibold">This Month</p>
      </div>

      {/* Best Selling Products sec */}

      <div className="flex justify-between items-end md:h-16 my-3 md:my-6">
        <div className="w-[50%] h-[100%] grid md:flex justify-between items-end">
          <p className="text-2xl font-semibold">Best Selling Products</p>
        </div>

        {/* button sec */}
        <div className="flex justify-center items-end text-sm ">
          <button className="md:px-8 px-3 md:py-3 py-1 bg-red-400 rounded text-white font-semibold">
            View All
          </button>
        </div>
      </div>

      {/* slider sec */}

      <div className="h-[50vh] flex gap-5 px-5 scrollbar-hidden items-center overflow-scroll">
        {thisMonthSliderCardContent.map((ele) => (
          <div
            key={ele.proId}
            className="h-[100%] min-w-[95%] md:min-w-[24%] rounded"
          >
            {/* img sec */}
            <div className="h-[70%] bg-gray-100 flex justify-center items-center rounded hover:scale-75 transition-all duration-500">
              <img className="h-[140px]" src={ele.img} />
            </div>

            {/* description sec */}

            <div className="pt-5">
              <p className="text-black font-semibold">{ele.title}</p>
              <div>
                <span className="text-red-400 pr-3">{ele.dPrice}</span>
                <span className="line-through  text-gray-400">{ele.price}</span>
              </div>

              {/* rating */}

              <div className=" flex gap-2">
                <RatingComponent rating={ele.rating} />
                <span className=" text-gray-400">{`(${ele.ratintCount})`}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThisMonthSection;
