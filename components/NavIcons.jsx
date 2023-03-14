"use client";

import React from "react";
import Link from "next/link";
import { BsFillHeartFill, BsFillPersonFill } from "react-icons/bs";
import { MdShoppingBag } from "react-icons/md";
//==================REDUX=========================
import { useSelector } from "react-redux";

const NavIcons = () => {
  const qty = useSelector((state) => state.cart.cartTotalQuantity);

  return (
    <section id="nav-icons">
      <div className="flex justify-end space-x-8 py-4">
        {qty > 0 ? (
          <Link href={"/cart"}>
            <div className="relative">
              <MdShoppingBag color="#2C3333" />
              <span className="bg-yellow-600 py-[1px] absolute -right-3 -top-4 px-[6px] text-[12px] text-white rounded-full">
                {qty}
              </span>
            </div>
          </Link>
        ) : (
          <Link href={"/cart"}>
            <div>
              <MdShoppingBag color="#2C3333" />
            </div>
          </Link>
        )}
        <div>
          <BsFillHeartFill color="#2C3333" />
        </div>
        <div>
          <BsFillPersonFill color="#2C3333" />
        </div>
      </div>
    </section>
  );
};

export default NavIcons;
