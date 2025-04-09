import React, { useEffect, useRef, useState } from "react";

const slides = [
  {
    id: 1,
    title: "Apple Iphone",
    subtitle: "Build stunning apps faster than ever.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJuRZs8mrTAY_v_SZxpWP0A_WUedYTn6VZJQ&s",
  },
  {
    id: 2,
    title: "boat portable wireless speaker",
    subtitle: "Seamless UI/UX with Tailwind CSS.",
    image:
      "https://m.media-amazon.com/images/S/aplus-media-library-service-media/427d6bb9-ac4c-4558-8e22-7eac588c8a3b.__CR0,0,970,600_PT0_SX970_V1___.png",
  },
  {
    id: 3,
    title: "Play Station",
    subtitle: "Turn your vision into reality.",
    image:
      "https://mrwallpaper.com/images/thumbnail/3d-blue-playstation-hd-qz85a0oz1sgxehir.jpg",
  },
];

const Slider = () => {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);

  const clearTimer = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const resetAutoSlide = () => {
    clearTimer();
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
    resetAutoSlide();
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    resetAutoSlide();
  };

  useEffect(() => {
    resetAutoSlide();
    return () => clearTimer();
  }, [current]);

  return (
    <div className="relative w-full h-[100%] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundPosition: "center",
            backgroundSize: "100% 100%",
          }}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
              {slide.title}
            </h2>
            <p className="text-lg md:text-xl text-white drop-shadow-sm">
              {slide.subtitle}
            </p>
          </div>
        </div>
      ))}

      {/* Prev Button */}
      <button
        onClick={prevSlide}
        className="absolute z-20 top-1/2 left-4 transform -translate-y-1/2 bg-white/30 hover:bg-white/60 text-xl p-2 rounded-full"
      >
        ❮
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute z-20 top-1/2 right-4 transform -translate-y-1/2 bg-white/30 hover:bg-white/60 text-xl p-2 rounded-full"
      >
        ❯
      </button>

      {/* Dots */}
      <div className="absolute z-20 bottom-5 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setCurrent(i);
              resetAutoSlide();
            }}
            className={`w-3 h-3 rounded-full ${
              i === current ? "bg-white" : "bg-white/50"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Slider;
