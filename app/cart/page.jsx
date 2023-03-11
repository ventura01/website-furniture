import React from "react";
import { useSelector } from "react-redux";
import Link from "next/link";
import { MdKeyboardBackspace } from "react-icons/md";

const CartPage = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <div>
      <h2>Shopping Cart</h2>
      {cart.cartItems.length === 0 ? (
        <div>
          <p>Your cart is currently empty!</p>
          <div>
            <Link href={"/"}>
              <MdKeyboardBackspace />
              <span>Start Shoppinng</span>
            </Link>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default CartPage;
