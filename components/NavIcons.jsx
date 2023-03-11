import React from "react";
import Link from "next/link";
import {
  BsFillHeartFill,
  BsFillPersonFill,
} from "react-icons/bs";
import { MdShoppingBag } from "react-icons/md";

const NavIcons = () => {
  return (
    <section id="nav-icons">
      <div className="flex justify-end space-x-8 py-12">
        <Link href={"/cart"}>
          <div className="relative">
            <MdShoppingBag />
            <span className="bg-yellow-600 py-[1px] absolute -right-3 -top-4 px-[6px] text-[12px] text-white rounded-full">
              3
            </span>
          </div>
        </Link>
        <div>
          <BsFillHeartFill />
        </div>
        <div>
          <BsFillPersonFill />
        </div>
      </div>
    </section>
  );
};

export default NavIcons;
