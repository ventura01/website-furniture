"use client";

import toast, { Toaster } from "react-hot-toast";
import { useSelector, useDispatch } from "react-redux";
import { MdKeyboardBackspace } from "react-icons/md";
import {
  BsFillBasket3Fill,
  BsPlusCircleFill,
  BsDashCircleFill,
} from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";

import {
  addToWishList,
  removeFromWishList,
  decreaseFromWishList,
  clearWishList,
  getTotalWishItems,
} from "../redux/features/wishlist/wishListSlice";
import NavIcons from "@/components/NavIcons";
import NavLinks from "@/components/NavLinks";
import React, { useEffect } from "react";
const WishListPage = () => {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist);
  const handleAddToWishList = (wishItem) => {
    dispatch(addToWishList(wishItem));
  };
  const handleRemoveFromWishList = (wishItem) => {
    dispatch(removeFromWishList(wishItem));
  };
  const handleDecreaseFromWishList = (wishItem) => {
    dispatch(decreaseFromWishList(wishItem));
  };
  const handleClearWsihList = () => {
    dispatch(clearWishList());
  };
  useEffect(() => {
    dispatch(getTotalWishItems());
  }, [wishlist, dispatch]);
  console.log(wishlist);
  return (
    <div className="container mx-auto">
      <div className="flex justify-between">
        <NavLinks className="hidden md:flex" />
        <NavIcons />
      </div>
      <h2 className="text-center text-4xl mt-8 font-bold">Wishlist</h2>
      {wishlist.wishItems.length === 0 ? (
        <div className="flex flex-col items-center mt-40">
          <BsFillBasket3Fill size={"4rem"} color={"#707070"} />
          <p className="mt-4">Your Wishlist is currently empty!</p>
          <div>
            <Link href={"/products"}>
              <div className="flex">
                <MdKeyboardBackspace />

                <span>Start Shopping</span>
              </div>
            </Link>
          </div>
        </div>
      ) : (
        <div>
          <div className="grid grid-cols-4 mt-24">
            <h3 className="text-sm md:text-base text-start pl-3">PRODUCT</h3>
            <h3 className="text-sm md:text-base text-center">PRICE</h3>
            <h3 className="text-sm md:text-base text-center">QUANTITY</h3>
            {/*<h3 className="text-sm md:text-base text-end pr-3">TOTAL</h3>*/}
          </div>
          <div>
            {wishlist.wishItems.map((wishItem) => (
              <div key={wishItem.id} className="grid grid-cols-4 border-t-2">
                <div className="flex p-3 items-center">
                  <div className="h-24 w-24 rounded-2xl overflow-hidden">
                    <Image
                      src={wishItem.url}
                      alt={wishItem.name}
                      width={250}
                      height={250}
                      className="object-center object-cover"
                    />
                  </div>
                  <div className="flex flex-col space-y-3 p-3">
                    <h3 className="font-semibold">{wishItem.name}</h3>
                    {/*<p>{cartItem.shortDesc}</p>*/}
                    <button
                      onClick={() => handleRemoveFromWishList(wishItem)}
                      className="self-start bg-slate-300 px-4 py-[2px] text-xs rounded-md"
                    >
                      Remove
                    </button>
                  </div>
                </div>
                <div className="text-center self-center">${wishItem.price}</div>
                <div className="flex items-center mx-auto border-2 self-center justify-around w-14 mx-w-24 rounded-md md:w-24">
                  <button onClick={() => handleDecreaseFromWishList(wishItem)}>
                    <BsDashCircleFill color="#707070" size={".85rem"} />
                  </button>
                  <div>{wishItem.wishQuantity}</div>
                  <button onClick={() => handleAddToWishList(wishItem)}>
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
                {/*<div className="text-end pr-3 self-center font-semibold">
                ${wishItem.price * wishItem.wishQuantity}
              </div>*/}
                <div className="flex self-center justify-end">
                  <button className="bg-blue-500 hover:bg-blue-300 text-white px-3 py-1 rounded-md text-xs">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="flex border-t-2 pt-3 items-start justify-between">
            <button
              onClick={() => handleClearWsihList()}
              className="w-32 h-9 mx-w-32 rounded-md border-2 border-slate-300 text-gray-600 mt-4 tracking-wide"
            >
              Clear Wishlist
            </button>
            <div className="">
              {/*<div className="flex justify-between mt-6 pr-3">
                <span className="text-lg">Sub-Total</span>
                <span className="text-lg font-bold">
                  ${wishlist.wishTotalAmount}
                </span>
                  </div>*/}
              {/*<p className="text-sm text-gray-500 mt-3">
                Taxes and shipping calculated at checkout.
                </p>*/}
              <button className="w-full bg-blue-500 text-white tracking-wide rounded-lg py-2 mt-3">
                Add All to Cart
              </button>
              <div className="mt-3 flex items-center">
                <Link href={"/products"}>
                  <div>
                    <MdKeyboardBackspace />
                  </div>
                  <span>Continue Shopping</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WishListPage;
