import React from "react";
import { useCart } from "../context/CartItems";
import { ShoppingBag } from "lucide-react";
import { discountedPrice } from "../utils/calculation";
import RatingComponent from "./RatingComponent";

const ProductCard = ({ ele }) => {
  const { cartItem, setCartItem } = useCart();

  const addToCart = (item) => {
    setCartItem((pre) => [...pre, item]);
    console.log(cartItem);
  };

  return (
    <div
      title={ele.title}
      className="h-[200px] md:h-[350px] min-w-[60px] max-w-[300px] rounded relative group overflow-hidden"
    >
      {/* img sec */}
      <div className="h-[50%] md:h-[70%] bg-gray-100 flex justify-center items-center rounded relative">
        <img className="h-[60%] md:h-[140px]" src={ele.img} />

        {/* add to cart botton for small screen size */}

        <button
          onClick={() => addToCart(ele)}
          className="bg-red-200 text-red-400 text-[8px] px-1 py-0.5 flex md:hidden lg:hidden items-center justify-center gap-1 rounded absolute bottom-0 left-0 right-0"
        >
          <span> Add to Cart</span> <ShoppingBag className="h-4" />
        </button>
      </div>

      {/* discount show */}

      <div className="bg-red-400 text-white text-[10px] px-1 py-0.5 md:px-4 md:py-1 rounded absolute top-0 right-0 md:top-5 md:right-5">
        <p>- {ele.discount} %</p>
      </div>

      {/* description sec */}

      <div className="pt-5 text-[10px] md:text-[16px] relative overflow-hidden">
        <p className="text-black font-semibold line-clamp-1">{ele.title}</p>
        <div className="">
          <span className="text-red-400 pr-3">
            $ {discountedPrice(ele.price, ele.discount)}
          </span>
          <span className="line-through  text-gray-400">$ {ele.price}</span>
        </div>

        {/* rating */}

        <div className=" flex gap-2">
          <RatingComponent rating={ele.rating} />
          <span className=" text-gray-400">{`(${ele.ratintCount})`}</span>
        </div>

        {/* add to cart botton */}

        <button
          onClick={() => addToCart(ele)}
          className="bg-red-200 text-red-400 px-2 py-1 hidden md:flex items-center text-[12px] font-semibold justify-center gap-1 rounded absolute bottom-[-100%] right-3 group-hover:bottom-3 duration-500"
        >
          <span> Add to Cart</span> <ShoppingBag className="h-4" />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
