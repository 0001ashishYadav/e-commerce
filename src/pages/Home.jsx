import {
  ArrowLeft,
  ArrowRight,
  Camera,
  ChevronRight,
  Computer,
  Gamepad,
  Headphones,
  Smartphone,
} from "lucide-react";
import React from "react";
import Slider from "../components/Slider";
import TodaySection from "../components/home/TodaySection";
import ThisMonthSection from "../components/home/ThisMonthSection";
import MiddleSlideSec from "../components/home/MiddleSlideSec";

function HomePage() {
  return (
    <>
      <section className="pt-12 md:pt-18">
        {/* hero section */}

        <div className="md:h-[50vh] max-w-7xl flex flex-col-reverse md:flex-row items-center gap-3 md:gap-0 justify-center mx-auto my-3 md:my-6">
          {/* left con */}
          <div className="h-[100%] w-[95%] md:w-[30%] px-3">
            <ul className="flex flex-col gap-4 justify-center h-[100%] text-gray-500">
              <li className="flex justify-between">
                <p>Women's Fashion</p>
                <ChevronRight />
              </li>
              <li className="flex justify-between">
                <p>Men's Fashion</p>
                <ChevronRight />
              </li>
              <li>Electronics </li>
              <li>Home & Lifestyle </li>
              <li>Medicine </li>
              <li>Sports & Outdoor </li>
              <li> Baby's Toy </li>
              <li> Groceries & Pets </li>
              <li> Health & Beauty </li>
            </ul>
          </div>
          {/* right con */}

          <div className="h-[100%] w-[95%] md:w-[70%] flex justify-end items-end">
            {/* slider sec */}
            <div className="h-[98%] flex justify-end items-end w-[95%] overflow-scroll scrollbar-hidden">
              <Slider />
            </div>
          </div>
        </div>

        {/* Today's section */}

        <TodaySection />

        {/* categories Section */}

        <div className="md:h-[40vh] w-[95%] md:w-[100%] max-w-7xl border-b-[1px] border-gray-200 mx-auto mb-5">
          {/* title */}
          <div className="flex gap-2 items-center">
            <div className="h-8 w-4 rounded bg-red-400"></div>
            <p className="text-red-400 font-semibold">Categories</p>
          </div>

          {/* Browse By Category sec */}

          <div className="flex justify-between items-end my-3 md:mb-8">
            {/* left con */}

            <div className="w-[50%] h-[100%] grid md:flex justify-between items-end">
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

          <div className="md:h-[50%] flex flex-wrap justify-between items-center">
            {/* phone */}

            <div className="h-[80%] md:w-[10%] w-[100px] grid justify-center items-center border border-red-400 hover:text-white hover:bg-red-400 rounded ">
              <Smartphone size={70} />
              <p className="text-2xl">Phones</p>
            </div>

            {/* computer */}

            <div className="h-[80%] md:w-[10%] w-[100px] grid justify-center items-center border border-red-400 hover:text-white hover:bg-red-400 rounded ">
              <Computer size={70} />
              <p className="text-2xl">Computers</p>
            </div>

            {/* smartwatch */}

            <div className="h-[80%] md:w-[10%] w-[100px] grid justify-center items-center border border-red-400 hover:text-white hover:bg-red-400 rounded ">
              <Camera size={70} />
              <p className="text-2xl">Camera</p>
            </div>

            {/* camera */}
            <div className="h-[80%] md:w-[10%] w-[100px] grid justify-center items-center border border-red-400 hover:text-white hover:bg-red-400 rounded ">
              <Camera size={70} />
              <p>Camera</p>
            </div>

            {/* headphones */}

            <div className="h-[80%] md:w-[10%] w-[100px] grid justify-center items-center border border-red-400 hover:text-white hover:bg-red-400 rounded ">
              <Headphones size={70} />
              <p>Headphones</p>
            </div>

            {/* gaming */}

            <div className="h-[80%] md:w-[10%] w-[100px] grid justify-center items-center border border-red-400 hover:text-white hover:bg-red-400 rounded ">
              <Gamepad size={70} />
              <p className="text-2xl">Gaming</p>
            </div>
          </div>
        </div>

        {/* this month section */}

        <ThisMonthSection />

        {/* middle section slider */}

        <MiddleSlideSec />
      </section>
    </>
  );
}

export default HomePage;
