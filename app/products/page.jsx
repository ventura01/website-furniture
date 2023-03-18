"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { productos } from "../../datos";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/features/cart/cartSlice";
import { BsFillBagFill, BsFillHouseFill } from "react-icons/bs";
import NavLinks from "@/components/NavLinks";
import NavIcons from "@/components/NavIcons";
import RightFooter from "@/components/RightFooter";
import LeftFooter from "@/components/LeftFooter";
import PagesFooter from "@/components/PagesFooter";
import toast, { Toaster } from "react-hot-toast";

const ProductPage = () => {
  const dispatch = useDispatch();
  const handleAddToCart = (producto) => {
    dispatch(addToCart(producto));
  };

  return (
    <div className="bg-[#EDF1D6]">
      <div className="container mx-auto flex justify-between">
        <NavLinks />
        <NavIcons />
      </div>
      <div className="flex flex-col container mx-auto pb-14 pt-20">
        <h3 className="text-center text-3xl text-[#40513B] font-bold">
          Our Products
        </h3>
        <p className="text-center text-lg text-[#9DC08B]">
          Lorem ipsum dolor sit amet consectetur.
        </p>
      </div>
      <div className="container mx-auto">
        <div className="">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {productos.map((producto) => (
              <div
                key={producto.id}
                className="rounded-3xl bg-[#9DC08B] overflow-hidden"
              >
                <Link href={`/${producto.id}`}>
                  <Image
                    src={producto.url}
                    alt={producto.name}
                    width={600}
                    height={600}
                    className="object-cover object-center h-36"
                  />
                </Link>
                <div className="p-3">
                  <h4 className="text-gray-600 uppercase">{producto.cat}</h4>
                  <h3 className="text-2xl text-[#f9fff6] font-semibold">
                    {producto.name}
                  </h3>
                  <p className="text-[#40513B] font-light">
                    {producto.shortDesc}
                  </p>
                  <p className="text-xl text-right text-[#40513B] my-3 pr-6 font-bold">
                    ${producto.price}.00
                  </p>
                </div>
                <div className="flex justify-around">
                  <button
                    className="bg-yellow-500 text-white py-2 px-6 rounded-3xl mb-4"
                    onClick={() => handleAddToCart(producto)}
                  >
                    Add to Cart
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
                    }}
                  />
                  <Link href={`/${producto.id}`}>
                    <button className="bg-yellow-500 text-white py-2 px-6 rounded-3xl mb-4">
                      See Details
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-[#9DC08B] mt-12">
        <div className="container mx-auto">
          <PagesFooter />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
