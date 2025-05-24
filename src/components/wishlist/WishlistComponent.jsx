import { wishlistContent } from "../../data/wishlistData";

import ProductCard from "../Card";

const WishlistComponent = () => {
  const wishlistCardContent = wishlistContent;

  return (
    <section className="">
      <div className="flex justify-between items-center md:h-16 my-3 md:my-6">
        <p>Wishlist ({wishlistCardContent.length})</p>

        {/* button sec */}
        <div className="flex justify-center items-end text-[8px] md:text-sm ">
          <button className="md:px-8 px-3 md:py-3 py-1 rounded font-medium border-2 border-gray-200">
            Move All To Bag
          </button>
        </div>
      </div>

      {/* wishlist sec */}
      <div className=" grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-10">
        {wishlistCardContent.map((ele) => (
          <ProductCard ele={ele} key={ele.proId} />
        ))}
      </div>
    </section>
  );
};

export default WishlistComponent;
