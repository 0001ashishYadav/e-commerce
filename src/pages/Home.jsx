import { ArrowLeft, ArrowRight, ChevronRight } from "lucide-react";
import React from "react";
import Slider from "../components/Slider";

function HomePage() {
  return (
    <>
      <section className="pt-12 md:pt-18">
        {/* hero section */}

        <div className="h-[50vh] max-w-7xl flex flex-col-reverse md:flex-row items-center gap-3 md:gap-0 justify-center mx-auto my-3 md:my-6">
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

        <div className="h-[80vh] max-w-7xl mx-auto md:my-16 border text-gray-400">
          {/* title */}
          <div className="flex gap-2 items-center">
            <div className="h-8 w-4 rounded bg-red-400"></div>
            <p className="text-red-400 font-semibold">Today's</p>
          </div>

          {/* flash sales sec */}

          <div className="flex justify-between items-end border h-16 md:my-6">
            {/* left con */}

            <div className="w-[50%] h-[100%] flex justify-between items-end border">
              <p className="text-2xl font-semibold">Flash Sales</p>
              <div className="flex gap-2 items-center">
                {/* days */}
                <div>
                  <p>Days</p>
                  <p className="text-2xl font-bold">03</p>
                </div>

                <span className="text-red-400 text-2xl font-bold">:</span>

                {/* Hours */}
                <div>
                  <p>Hours</p>
                  <p className="text-2xl font-bold">23</p>
                </div>
                <span className="text-red-400 text-2xl font-bold">:</span>

                {/* Minutes */}
                <div>
                  <p>Minutes</p>
                  <p className="text-2xl font-bold">19</p>
                </div>
                <span className="text-red-400 text-2xl font-bold">:</span>

                {/* Seconds */}
                <div>
                  <p>Seconds</p>
                  <p className="text-2xl font-bold">56</p>
                </div>
              </div>
            </div>

            {/* right con */}
            <div className="flex gap-2 items-end border">
              <button className="h-10 w-10 rounded-full flex justify-center items-center bg-gray-100">
                <ArrowLeft />
              </button>
              <button className="h-10 w-10 rounded-full flex justify-center items-center bg-gray-100">
                <ArrowRight />
              </button>
            </div>
          </div>

          {/* slider sec */}

          <div className="h-[50vh] border"></div>

          {/* button sec */}
          <div className="flex justify-center items-center mt-6">
            <button className="px-8 py-3 bg-red-400 rounded text-white font-semibold">
              View All Product
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
