import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useEffect, useState } from "react";

const MiddleSlideSec = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const featuredProducts = [
    {
      name: "Premium Headphones",
      price: "$349.99",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=1000",
      description:
        "Experience crystal clear sound with our flagship headphones.",
    },
    {
      name: "Pro Gaming Headset",
      price: "$199.99",
      image:
        "https://images.unsplash.com/photo-1615655406736-b37c4fabf923?auto=format&fit=crop&q=80&w=1000",
      description: "Immerse yourself in gaming with surround sound technology.",
    },

    {
      name: "Studio Monitors",
      price: "$299.99",
      image:
        "https://images.unsplash.com/photo-1558089687-f282ffcbc126?auto=format&fit=crop&q=80&w=1000",
      description: "Professional grade audio monitoring for creators.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredProducts.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredProducts.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + featuredProducts.length) % featuredProducts.length
    );
  };
  return (
    <section>
      {/* Featured Products Slider main con */}
      <div className="slider-container h-[500px] mb-16 max-w-7xl mx-auto ">
        <div
          className="slider-wrapper h-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {featuredProducts.map((product, index) => (
            <div
              key={index}
              className={`slider-item ${
                currentSlide === index ? "active" : ""
              } h-full`}
            >
              <div className="relative h-full">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                  <div className="absolute bottom-0 left-0 p-8 text-white">
                    <h2 className="text-4xl font-bold mb-2">{product.name}</h2>
                    <p className="text-xl mb-4">{product.description}</p>
                    <p className="text-2xl font-bold mb-6">{product.price}</p>
                    <button className="bg-white text-black px-6 py-3 rounded-full hover:bg-gray-100 transition-colors button-pop">
                      Shop Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="slider-button prev" onClick={prevSlide}>
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button className="slider-button next" onClick={nextSlide}>
          <ChevronRight className="w-6 h-6" />
        </button>
        <div className="slider-nav">
          {featuredProducts.map((_, index) => (
            <button
              key={index}
              className={`slider-dot ${currentSlide === index ? "active" : ""}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MiddleSlideSec;
