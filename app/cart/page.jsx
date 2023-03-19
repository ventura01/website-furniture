"use client";

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
import { MdKeyboardBackspace, MdRemoveShoppingCart } from "react-icons/md";
import Image from "next/image";
import {
  BsFillBasket3Fill,
  BsPlusCircleFill,
  BsDashCircleFill,
} from "react-icons/bs";
import {
  addToCart,
  decreaseFromCart,
  removeFromCart,
  clearCart,
  getTotals,
} from "../redux/features/cart/cartSlice";
import NavLinks from "@/components/NavLinks";
import NavIcons from "@/components/NavIcons";
import toast, { Toaster } from "react-hot-toast";

const CartPage = () => {
  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const handleRemoveFromCart = (cartItem) => {
    dispatch(removeFromCart(cartItem));
  };
  const handleDecreaseFromCart = (cartItem) => {
    dispatch(decreaseFromCart(cartItem));
  };
  const handleIncreaseCart = (cartItem) => {
    dispatch(addToCart(cartItem));
  };
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  return (
    <div className="container mx-auto">
      <div className="flex justify-between">
        <NavLinks className="hidden md:flex" />
        <NavIcons />
      </div>
      <h2 className="text-center text-4xl mt-8 font-bold">Shopping Cart</h2>
      {cart.cartItems.length === 0 ? (
        <div className="flex flex-col items-center mt-40">
          <MdRemoveShoppingCart size={"4rem"} color={"#707070"} />
          <p className="mt-4">Your cart is currently empty!</p>
          <Link href={"/products"}>
            <div>
              <div className="flex items-center">
                <MdKeyboardBackspace />
                <span className="ml-2">Start Shopping</span>
              </div>
            </div>
          </Link>
        </div>
      ) : (
        <div>
          <div className="grid grid-cols-4 mt-24">
            <h3 className="text-sm md:text-base text-start pl-3">PRODUCT</h3>
            <h3 className="text-sm md:text-base text-center">PRICE</h3>
            <h3 className="text-sm md:text-base text-center">QUANTITY</h3>
            <h3 className="text-sm md:text-base text-end pr-3">TOTAL</h3>
          </div>
          <div>
            {cart.cartItems.map((cartItem) => (
              <div key={cartItem.id} className="grid grid-cols-4 border-t-2">
                <div className="flex p-3 items-center">
                  <div className="h-24 w-24 rounded-2xl overflow-hidden">
                    <Image
                      src={cartItem.url}
                      alt={cartItem.name}
                      width={250}
                      height={250}
                      className="object-center object-cover"
                    />
                  </div>
                  <div className="flex flex-col space-y-3 p-3">
                    <h3 className="font-semibold">{cartItem.name}</h3>
                    {/*<p>{cartItem.shortDesc}</p>*/}
                    <button
                      onClick={() => handleRemoveFromCart(cartItem)}
                      className="self-start bg-slate-300 px-4 py-[2px] text-xs rounded-md"
                    >
                      Remove
                    </button>
                  </div>
                </div>
                <div className="text-center self-center">${cartItem.price}</div>
                <div className="flex items-center mx-auto border-2 self-center justify-around w-14 mx-w-24 rounded-md md:w-24">
                  <button onClick={() => handleDecreaseFromCart(cartItem)}>
                    <BsDashCircleFill color="#707070" size={".85rem"} />
                  </button>
                  <div>{cartItem.cartQuantity}</div>
                  <button onClick={() => handleIncreaseCart(cartItem)}>
                    <BsPlusCircleFill color="#707070" size={".85rem"} />
                  </button>
                  <Toaster
                    toastOptions={{
                      success: {
                        style: {
                          background: "green",
                          color: "#fff",
                        },
                      },
                      error: {
                        style: {
                          background: "red",
                          color: "#fff",
                        },
                      },
                      info: {
                        style: {
                          background: "teal",
                          color: "#fff",
                        },
                      },
                    }}
                  />
                </div>
                <div className="text-end pr-3 self-center font-semibold">
                  ${cartItem.price * cartItem.cartQuantity}
                </div>
              </div>
            ))}
          </div>
          <div className="flex border-t-2 pt-3 items-start justify-between">
            <button
              onClick={() => handleClearCart()}
              className="w-32 h-9 mx-w-32 rounded-md border-2 border-slate-300 text-gray-600 mt-4 tracking-wide"
            >
              Clear cart
            </button>
            <div className="">
              <div className="flex justify-between mt-6 pr-3">
                <span className="text-lg">Sub-Total</span>
                <span className="text-lg font-bold">
                  ${cart.cartTotalAmount}
                </span>
              </div>
              <p className="text-sm text-gray-500 mt-3">
                Taxes and shipping calculated at checkout.
              </p>
              <button className="w-full bg-blue-500 text-white tracking-wide rounded-lg py-2 mt-3">
                Check Out
              </button>
              <Link href={"/products"}>
                <div className="mt-3 flex items-center">
                  <div>
                    <MdKeyboardBackspace />
                  </div>
                  <span className="ml-2">Continue Shopping</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
