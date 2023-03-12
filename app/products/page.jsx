"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { productos } from "../../datos";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/features/cart/cartSlice";

const ProductPage = () => {
  const dispatch = useDispatch();
  const handleAddToCart = (producto) => {
    dispatch(addToCart(producto));
  };

  return (
    <div className="flex w-screen h-screen">
      <div className="flex flex-1 pt-24 pl-40 pr-24 w-1/3 bg-yellow-200">
        <div className="flex flex-col space-y-8">
          <h1 className="text-6xl font-bold">Our Products</h1>
          <p className="text-gray-500">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis
            voluptate libero suscipit cumque illum adipisci quidem vitae sequi
            error! Itaque molestiae maiores nisi quod voluptas quidem tempora
            aspernatur cum? Sapiente iusto similique beatae ipsam ipsum
            cupiditate perspiciatis aspernatur ratione modi eos, quis,
            consectetur earum nulla facere laboriosam aliquid corrupti libero
            adipisci debitis mollitia esse repellendus vero reiciendis.
            Possimus, architecto? Voluptate eveniet quo tenetur molestias ea
            nulla. Fuga fugiat incidunt dolorum sed a?
          </p>
        </div>
      </div>
      <div className="w-2/3 p-8">
        <div className="grid grid-cols-3 gap-3">
          {productos.map((producto) => (
            <div
              key={producto.id}
              className="rounded-3xl bg-zinc-100 overflow-hidden"
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
                <h4>{producto.cat}</h4>
                <h3>{producto.name}</h3>
                <p>{producto.shortDesc}</p>
                <p>${producto.price}</p>
              </div>
              <div>
                <Link href={"/cart"}>
                  <button
                    className="bg-yellow-500 py-4 px-6"
                    onClick={() => handleAddToCart(producto)}
                  >
                    Add to Cart
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
