"use client";

import Image from "next/image";
import React from "react";
import { productos } from "../../datos";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/features/cart/cartSlice";
import { BsFillBagFill, BsFillHouseFill } from "react-icons/bs";
import Link from "next/link";
import NavLinks from "@/components/NavLinks";
import NavIcons from "@/components/NavIcons";

const ProductDetail = ({ params }) => {
  const { id } = params;
  const data = productos[id - 1];
  const dispatch = useDispatch();
  const handleAddToCart = (producto) => {
    dispatch(addToCart(producto));
  };

  return (
    <div>
      <div className="flex justify-around">
        <NavLinks />
        <NavIcons />
      </div>

      <div className="flex pl-40 pt-40 pr-40">
        <div className="">
          <Image
            src={data.url}
            alt={data.name}
            width={800}
            height={800}
            className="object-center w-[500px] h-[500px] object-cover"
          ></Image>
        </div>
        <div className="w-[800px] space-y-8 pl-20 pr-20 pt-10">
          <h3 className="uppercase text-zinc-500">{data.cat}</h3>
          <h2 className="text-3xl">{data.name}</h2>
          <p className="text-gray-700">{data.longDesc}</p>
          <p className="text-2xl">${data.price}</p>
          <div>
            <Link href={"/cart"}>
              <button
                onClick={() => handleAddToCart(data)}
                className="px-12 py-4 bg-yellow-500"
              >
                Shop Now!
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
