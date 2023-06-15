import cartImg from "../assets/images/icon-cart.svg";
import { useState } from "react";

const cart = () => {
  const [openCart, setopenCart] = useState(false);
  const [cartItem, setCartItems] = useState(0);

  const handleCart = () => {
    setopenCart(!openCart);
  };

  const handleCartItems = () => {
    setCartItems(cartItem + 1);
  };

  return (
    <div className="justify-end text-end ">
      <img src={cartImg} alt="cart" onClick={handleCart} />

      <div>
        {openCart && (
          <div className="fixed top-0 mt-20 right-0 w-1/4 bg-[#ffff] py-10 mr-20 rounded-md drop-shadow-xl border border-[#f4f4f5]">
            <div className="flex flex-col justify-center px-8 space-y-6">
              <p className="font-bold text-start border-b py-2">Cart</p>
              {cartItem === 0 ? (
                <p className="text-center font-lg text-center">Cart Is Empty</p>
              ) : (
                <div className="flex flex-col mx-auto">
                  <div>
                    <p>{cartItem}</p>
                  </div>
                  <button className="text-[#ffff] text-center rounded-md bg-[#ff7d1a] py-3 w-[200px]">
                    Checkout
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default cart;
