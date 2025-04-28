import {
  CameraIcon,
  ComputerIcon,
  Gamepad2,
  Phone,
  Smartphone,
} from "lucide-react";
import React from "react";
import { BsHeadphones, BsSmartwatch } from "react-icons/bs";
import { ArrowLeft, ArrowRight } from "lucide-react";

const CategorySection = () => {
  const cardCon = [
    {
      icon: Phone,
      title: "Phones",
    },
    {
      icon: ComputerIcon,
      title: "Computer",
    },
    {
      icon: BsSmartwatch,
      title: "Smartwatch",
    },
    {
      icon: BsHeadphones,
      title: "Hwadphone",
    },
    {
      icon: CameraIcon,
      title: "Camera",
    },
    {
      icon: Gamepad2,
      title: "Game",
    },
  ];

  return (
    <div className="md:h-[40vh] w-[95%] md:w-[100%] max-w-7xl border-b-[1px] border-gray-200 mx-auto my-8 md:my-0 mb-5">
      {/* title */}
      <div className="flex gap-2 items-center">
        <div className="h-8 w-4 rounded bg-red-400"></div>
        <p className="text-red-400 font-semibold">Categories</p>
      </div>

      {/* Browse By Category sec */}

      <div className="flex justify-between items-end my-3 md:mb-8">
        {/* left con */}

        <div className="md:w-[50%] h-[100%] grid md:flex justify-between items-end">
          <p className="text-2xl font-semibold">Browse By Category</p>
        </div>

        {/* right con */}
        <div className="hidden md:flex gap-2 items-end">
          <button className="h-10 w-10 rounded-full flex justify-center items-center bg-gray-100">
            <ArrowLeft />
          </button>
          <button className="h-10 w-10 rounded-full flex justify-center items-center bg-gray-100">
            <ArrowRight />
          </button>
        </div>
      </div>

      {/* icon sec */}

      <div className="md:h-[50%] flex flex-wrap justify-between gap-8 items-center">
        {cardCon.map((ele, ind) => (
          <div
            key={ind}
            className="md:h-[80%] h-[80px] md:w-[10%] w-[80px] flex flex-wrap justify-center items-center border border-red-400 hover:text-white hover:bg-red-400 rounded"
          >
            <ele.icon size={45} />
            <p className="text-sm">{ele.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
