import React from "react";
import Slider from "../components/Slider";
import TodaySection from "../components/home/TodaySection";
import ThisMonthSection from "../components/home/ThisMonthSection";
import MiddleSlideSec from "../components/home/MiddleSlideSec";
import OurProductSection from "../components/home/OurProductSection";
import { ChevronRight } from "lucide-react";
import CategorySection from "../components/home/CategorySection";

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

        <CategorySection />

        {/* this month section */}

        <ThisMonthSection />

        {/* middle section slider */}

        <section className="my-10 w-[95%] mx-auto">
          <MiddleSlideSec />
        </section>

        {/* our product sec */}

        <OurProductSection />
      </section>
    </>
  );
}

export default HomePage;
