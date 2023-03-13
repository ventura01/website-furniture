import Link from "next/link";
import React from "react";

const HeroContent = () => {
  return (
    <section id="hero">
      <div className="flex flex-col md:w-[80%] mb-12 mt-12 space-y-12 items-start">
        <h1 className=" text-center  text-4xl md:text-6xl font-bold">
          Wood Candy Sofa
        </h1>
        <p className="text-slate-400">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia
          repudiandae, nulla asperiores iusto laudantium rem doloremque hic, vel
          excepturi aut sit provident rerum adipisci?
        </p>
        <strong className="text-2xl">$399.99</strong>
        <Link href={"/products"}>
          <button className="py-4 px-6 rounded-sm bg-yellow-500">
            Shop Now!
          </button>
        </Link>
      </div>
    </section>
  );
};

export default HeroContent;
