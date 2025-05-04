import React, { useEffect, useState } from "react";
import useCart, { CartProvider } from "../context/CartItems";
import { ChevronDown, ChevronUp } from "lucide-react";

const CartPage = () => {
  const [cartItem, setCartItem] = useState([
    {
      img: "https://f.media-amazon.com/images/I/71zfpkr4bYL._SX522_.jpg",
      title: "Bluetooth Headphones",
      price: "1499",
    },
    {
      img: "https://f.media-amazon.com/images/I/414rdyFGiGL._SX300_SY300_QL70_FMwebp_.jpg",
      title: "Pigeon Inox bottle 900ml",
      price: "179",
    },
    {
      img: "https://f.media-amazon.com/images/I/51Oq79-eK-L._SY445_SX342_QL70_FMwebp_.jpg",
      title: "One94Store 3D Galaxy Crystal Ball ",
      price: "1499",
    },
    {
      img: "https://f.media-amazon.com/images/I/31Xz-5Ua8HL._SY300_SX300_QL70_FMwebp_.jpg",
      title: "ECOVACS DEEBOT Robot Vaccum",
      price: "1,29,999",
    },
    {
      img: "https://f.media-amazon.com/images/I/81yobRRV8nL._SX679_.jpg",
      title: "Cookwell Bullet Mixer Grinder",
      price: "2,048",
    },
  ]);

  function addToCart(item) {
    setCartItem((pre) => [...pre, item]);
    console.log(cartItem);
  }

  return (
    <CartProvider>
      <section className="pt-16 md:pt-32 max-w-7xl mx-auto ">
        {/* title sec */}

        <div className="h-[60px] flex justify-around text-[12px] md:text-[16px] items-center shadow-2xs">
          <p className="w-[25%] flex items-center pl-4">Product</p>
          <p className="w-[25%]  flex items-center justify-center">Price</p>
          <p className="w-[25%]  flex items-center justify-center">Quantity</p>
          <p className="w-[25%]  flex items-center justify-center">Subtotal</p>
        </div>

        <div>
          {cartItem.map((ele, ind) => (
            <div
              key={ind}
              className="md:h-[60px] flex justify-around items-center bg-white shadow-2xs my-4"
            >
              {/* img sec */}
              <div className="flex gap-3 w-[25%] items-center flex-wrap p-3 md:p-0 md:pl-4  ">
                <img className="h-[30px]" src={ele.img} />
                <p className="text-[10px] md:text-sm">{ele.title}</p>
              </div>

              {/* price */}

              <p className="w-[25%]  flex items-center justify-center ">{` ₹${ele.price}`}</p>

              {/* count sec */}

              <div className=" flex justify-center gap-2 items-center w-[25%] ">
                <p>01</p>

                <div className="grid">
                  <button>
                    <ChevronUp size={12} />
                  </button>

                  <button>
                    <ChevronDown size={12} />
                  </button>
                </div>
              </div>

              {/* subtotal sec */}

              <p className="w-[25%]  flex items-center justify-center">{`₹${ele.price}`}</p>
            </div>
          ))}
        </div>

        {/* button sec */}
        <div className="flex justify-between items-end px-2 md:px-0 text-[8px] md:text-sm">
          <button className="md:px-8 px-3 md:py-3 py-1 rounded font-medium border-2 border-gray-300">
            Return To Shop
          </button>
          <button className="md:px-8 px-3 md:py-3 py-1 rounded font-medium border-2 border-gray-300">
            Update Cart
          </button>
        </div>

        {/* total sec */}

        <div className="md:h-[50vh] flex flex-col md:flex-row justify-between items-center gap-5 md:gap-0 my-5 md:my-14">
          {/* left sec */}

          <div className="h-[100%] w-[95%]  md:w-[38%]">
            <div className="md:h-[40px] flex flex-col md:flex-row justify-between gap-5 md:gap-0">
              <input
                className="border-2 border-gray-200 outline-none rounded p-2"
                type="text"
                placeholder="coupon code"
              />

              <button className="bg-red-400 text-white px-14 py-2 rounded">
                Apply Coupon
              </button>
            </div>
          </div>
          {/* right sec */}

          <div className="h-[100%] w-[95%] md:w-[38%] border-2 border-gray-200 p-5 rounded">
            <p className="font-semibold md:mb-12">Cart Total</p>

            <div className="border-b-[1px] border-gray-200 flex justify-between my-3 pb-2">
              <p>subtotal:</p>
              <p>_total price</p>
            </div>
            <div className="border-b-[1px] border-gray-200 flex justify-between my-3 pb-2">
              <p>shipping</p>
              <p>free</p>
            </div>
            <div className="border-b-[1px] border-gray-200 flex justify-between my-3 pb-2">
              <p>total</p>
              <p>_total</p>
            </div>

            {/* button sec */}
            <div className="flex justify-center items-center text-sm md:mt-12 ">
              <button className="md:px-8 px-3 md:py-3 py-1 bg-red-400 rounded text-white font-semibold">
                Proceed to checkout
              </button>
            </div>
          </div>
        </div>
      </section>
    </CartProvider>
  );
};

export default CartPage;
