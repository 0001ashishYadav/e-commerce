import React, { useState, useEffect } from "react";

import {
  Star,
  Truck,
  Shield,
  ArrowRight,
  Heart,
  ShoppingCart,
  Search,
  Menu,
  Battery,
  Wifi,
  Music,
  Volume2,
  Clock,
  Award,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

function ProductPage() {
  const [selectedColor, setSelectedColor] = useState("Midnight Black");
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [currentSlide, setCurrentSlide] = useState(0);

  const colors = [
    { name: "Midnight Black", class: "bg-gray-900" },
    { name: "Ocean Blue", class: "bg-blue-600" },
    { name: "Forest Green", class: "bg-green-700" },
  ];

  const images = [
    "https://images.unsplash.com/photo-1605464315542-bda3e2f4e605?auto=format&fit=crop&q=80&w=1000",
    "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&q=80&w=1000",
    "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&q=80&w=1000",
    "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?auto=format&fit=crop&q=80&w=1000",
  ];

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

  const relatedProducts = [
    {
      name: "Wireless Earbuds",
      price: "$149.99",
      image:
        "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?auto=format&fit=crop&q=80&w=1000",
      rating: 4.5,
    },
    {
      name: "Premium Speaker",
      price: "$199.99",
      image:
        "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&q=80&w=1000",
      rating: 4.8,
    },
    {
      name: "Smart Watch",
      price: "$299.99",
      image:
        "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&q=80&w=1000",
      rating: 4.7,
    },
  ];

  const specifications = [
    { icon: Battery, title: "Battery Life", value: "Up to 30 hours" },
    { icon: Wifi, title: "Wireless Range", value: "33 feet (10m)" },
    { icon: Music, title: "Frequency Response", value: "20Hz - 20kHz" },
    { icon: Volume2, title: "Active Noise Cancellation", value: "Up to 30dB" },
    { icon: Clock, title: "Charging Time", value: "2 hours" },
    { icon: Award, title: "Hi-Res Certified", value: "Yes" },
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
    <>
      <div className="min-h-screen bg-gray-50 pt-18">
        {/* Navigation */}
        {/* <nav className="bg-white shadow-sm sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="h-16 flex items-center justify-between">
              <div className="flex items-center">
                <Menu className="h-6 w-6 text-gray-600 mr-4 lg:hidden hover-scale cursor-pointer" />
                <span className="text-xl font-bold text-gray-900 hover-scale">
                  TechStore
                </span>
              </div>
              <div className="hidden lg:flex items-center space-x-8">
                {["Home", "Shop", "About", "Contact"].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="text-gray-600 hover:text-gray-900 relative group"
                  >
                    {item}
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-900 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                  </a>
                ))}
              </div>
              <div className="flex items-center space-x-4">
                <Search className="w-6 h-6 text-gray-600 cursor-pointer hover-scale" />
                <Heart className="w-6 h-6 text-gray-600 cursor-pointer hover:text-red-500 transition-colors hover-scale" />
                <ShoppingCart className="w-6 h-6 text-gray-600 cursor-pointer hover-scale" />
              </div>
            </div>
          </div>
        </nav> */}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 my-5">
          {/* Featured Products Slider main con */}
          <div className="slider-container h-[500px] mb-16 ">
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
                        <h2 className="text-4xl font-bold mb-2">
                          {product.name}
                        </h2>
                        <p className="text-xl mb-4">{product.description}</p>
                        <p className="text-2xl font-bold mb-6">
                          {product.price}
                        </p>
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
                  className={`slider-dot ${
                    currentSlide === index ? "active" : ""
                  }`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>
          </div>

          {/* Main Product Section */}
          <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
            {/* Image gallery */}
            <div className="flex flex-col animate-fade-in ">
              <div className="overflow-hidden rounded-lg bg-white aspect-w-1 aspect-h-1">
                <img
                  src={images[selectedImage]}
                  alt="Modern Wireless Headphones"
                  className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-110"
                />
              </div>
              <div className="mt-4 grid grid-cols-4 gap-4">
                {images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative rounded-lg overflow-hidden hover-lift ${
                      selectedImage === index ? "ring-2 ring-gray-900" : ""
                    }`}
                  >
                    <img
                      src={image}
                      alt={`Product ${index + 1}`}
                      className="h-16 w-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product info */}
            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0 animate-slide-in">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 hover-scale">
                Premium Wireless Headphones
              </h1>

              {/* Rating */}
              <div className="mt-3 flex items-center">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current hover-scale"
                    />
                  ))}
                </div>
                <span className="ml-3 text-sm text-gray-500">
                  (150 reviews)
                </span>
              </div>

              {/* Price */}
              <div className="mt-6 flex items-center animate-scale-in">
                <p className="text-3xl tracking-tight text-gray-900">$299.99</p>
                <span className="ml-3 text-sm text-gray-500 line-through">
                  $399.99
                </span>
                <span className="ml-3 text-sm text-green-600 bg-green-100 px-2 py-1 rounded hover-scale">
                  Save 25%
                </span>
              </div>

              {/* Color picker */}
              <div className="mt-8">
                <h3 className="text-sm font-medium text-gray-900">Color</h3>
                <div className="mt-4 flex items-center space-x-3">
                  {colors.map((color) => (
                    <button
                      key={color.name}
                      className={`relative h-8 w-8 rounded-full ${
                        color.class
                      } hover-scale ${
                        selectedColor === color.name
                          ? "ring-2 ring-offset-2 ring-gray-500"
                          : ""
                      }`}
                      onClick={() => setSelectedColor(color.name)}
                    >
                      <span className="sr-only">{color.name}</span>
                    </button>
                  ))}
                </div>
                <p className="mt-2 text-sm text-gray-500 animate-fade-in">
                  {selectedColor}
                </p>
              </div>

              {/* Quantity */}
              <div className="mt-8">
                <h3 className="text-sm font-medium text-gray-900">Quantity</h3>
                <div className="mt-2 flex items-center space-x-3">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="rounded-md px-3 py-1 text-sm font-semibold text-gray-900 border border-gray-300 hover:bg-gray-50 button-pop"
                  >
                    -
                  </button>
                  <span className="text-gray-900">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="rounded-md px-3 py-1 text-sm font-semibold text-gray-900 border border-gray-300 hover:bg-gray-50 button-pop"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Add to cart button */}
              <div className="mt-8 flex space-x-4">
                <button className="flex-1 flex items-center justify-center rounded-md bg-gray-900 px-8 py-3 text-base font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 button-pop hover-lift">
                  Add to Cart
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button className="flex items-center justify-center rounded-md border border-gray-300 px-8 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 button-pop hover-lift">
                  <Heart className="h-5 w-5" />
                </button>
              </div>

              {/* Features */}
              <div className="mt-8 border-t border-gray-200 pt-8">
                <div className="prose prose-sm text-gray-500">
                  <div className="space-y-6">
                    <div className="flex items-center hover-lift">
                      <Shield className="h-5 w-5 text-green-500" />
                      <span className="ml-2">2 Year Warranty</span>
                    </div>
                    <div className="flex items-center hover-lift">
                      <Truck className="h-5 w-5 text-blue-500" />
                      <span className="ml-2">Free Shipping</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="mt-8">
                <h3 className="text-sm font-medium text-gray-900">
                  Description
                </h3>
                <div className="mt-4 prose prose-sm text-gray-500 hover-lift">
                  <p>
                    Experience premium sound quality with our wireless
                    headphones. Featuring advanced noise cancellation, premium
                    materials, and up to 30 hours of battery life. Perfect for
                    music enthusiasts and professionals alike.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Specifications */}
          <div className="mt-16 border-t border-gray-200 pt-16">
            <h2 className="text-2xl font-bold text-gray-900 hover-scale">
              Technical Specifications
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {specifications.map((spec) => (
                <div
                  key={spec.title}
                  className="flex items-center bg-white p-6 rounded-lg shadow-sm hover-lift transition-all duration-300"
                >
                  <spec.icon className="h-8 w-8 text-gray-900" />
                  <div className="ml-4">
                    <h3 className="text-sm font-medium text-gray-900">
                      {spec.title}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{spec.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Related Products */}
          <div className="mt-16 border-t border-gray-200 pt-16">
            <h2 className="text-2xl font-bold text-gray-900 hover-scale">
              Related Products
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3">
              {relatedProducts.map((product) => (
                <div
                  key={product.name}
                  className="group relative hover-lift p-4"
                >
                  <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-white">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="mt-4">
                    <h3 className="text-sm font-medium text-gray-900 group-hover:text-gray-600 transition-colors">
                      {product.name}
                    </h3>
                    <div className="mt-1 flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(product.rating)
                              ? "text-yellow-400 fill-current"
                              : "text-gray-200"
                          } hover-scale`}
                        />
                      ))}
                      <span className="ml-2 text-sm text-gray-500">
                        {product.rating}
                      </span>
                    </div>
                    <p className="mt-1 text-sm font-medium text-gray-900">
                      {product.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        {/* <footer className="bg-white mt-16 border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  title: "Shop",
                  links: [
                    "Headphones",
                    "Speakers",
                    "Accessories",
                    "New Arrivals",
                  ],
                },
                {
                  title: "Support",
                  links: ["Contact Us", "FAQs", "Shipping", "Returns"],
                },
                {
                  title: "Company",
                  links: ["About Us", "Blog", "Careers", "Press"],
                },
              ].map((section) => (
                <div key={section.title} className="hover-lift">
                  <h3 className="text-sm font-semibold text-gray-900">
                    {section.title}
                  </h3>
                  <ul className="mt-4 space-y-2">
                    {section.links.map((link) => (
                      <li key={link}>
                        <a
                          href="#"
                          className="text-sm text-gray-500 hover:text-gray-900 transition-colors duration-300"
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              <div className="hover-lift">
                <h3 className="text-sm font-semibold text-gray-900">
                  Newsletter
                </h3>
                <p className="mt-4 text-sm text-gray-500">
                  Subscribe to our newsletter for updates and exclusive offers.
                </p>
                <form className="mt-4">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm transition-all duration-300 hover:shadow-md"
                  />
                  <button
                    type="submit"
                    className="mt-2 w-full rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 button-pop"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
            <div className="mt-12 border-t border-gray-200 pt-8">
              <p className="text-sm text-gray-500 text-center">
                &copy; 2025 TechStore. All rights reserved.
              </p>
            </div>
          </div>
        </footer> */}
      </div>
    </>
  );
}

export default ProductPage;
