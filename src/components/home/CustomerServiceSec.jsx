import React from "react";

const CustomerServiceSec = () => {
  const cardContent = [
    {
      img: "/heroNewArrivalAssets/icon-delivery.png",
      title: "FREE AND FAST DELIVERY",
      description: "Free delivery for all orders over $140",
    },
    {
      img: "/heroNewArrivalAssets/Icon-Customer.png",
      title: "24/7 CUSTOMER SERVICE",
      description: "Friendly 24/7 customer support",
    },
    {
      img: "/heroNewArrivalAssets/Icon-secure.png",
      title: "MONEY BACK GUARANTEE",
      description: "We reurn money within 30 days",
    },
  ];

  return (
    <section className="h-[70vh] md:h-[40vh] max-w-7xl mx-auto flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20 mb-5">
      {cardContent.map((ele, ind) => (
        <div key={ind} className="h-[55%] md:w-[20%] grid">
          <div className=" bg-gray-300 h-[60px] w-[60px] rounded-full flex justify-center items-center mx-auto">
            <div className="h-[50px] w-[50px] rounded-full bg-[#0d0d0d] flex justify-center items-center">
              <img className="h-[40px]" src={ele.img} />
            </div>
          </div>

          {/* content sec */}

          <div>
            <p className="font-semibold text-center">{ele.title}</p>
            <p className="text-[10px] text-center">{ele.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default CustomerServiceSec;
