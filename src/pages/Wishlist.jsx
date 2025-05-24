import React from "react";
import WishlistComponent from "../components/wishlist/WishlistComponent";
import JustForUcomponent from "../components/wishlist/JustForUcomponent";

const WishlistPage = () => {
  return (
    <section className="pt-18 max-w-7xl w-[90%] mx-auto ">
      {/* wishlist */}

      <WishlistComponent />

      {/* just for you section */}

      <JustForUcomponent />
    </section>
  );
};

export default WishlistPage;
