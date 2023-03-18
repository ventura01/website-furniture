import React, { useState } from "react";
import { productos } from "../datos";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import PageCount from "./PageCount";
import Link from "next/link";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  console.log(currentIndex);
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? productos.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === productos.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  console.log(currentIndex);
  let currentPage = currentIndex + 1;
  const numPages = productos.length;
  return (
    <div className="flex max-w-[1400px] w-full h-[780px] m-auto relative">
      <div
        style={{ backgroundImage: `url(${productos[currentIndex].url})` }}
        className="w-[950px] h-[350px] bg-center bg-cover duration-500 md:absolute md:bottom-72 md:-right-[95%] z-10"
      ></div>
      <div className="z-20 flex flex-col md:w-[80%] md:absolute md:top-36 mb-12 mt-12 space-y-12 items-start">
        <h3 className="uppercase text-lg text-gray-500 font-bold">
          {productos[currentIndex].cat}
        </h3>
        <h1 className="text-center capitalize text-4xl md:text-6xl font-bold">
          {productos[currentIndex].name}
        </h1>
        <p className="text-slate-400">{productos[currentIndex].shortDesc}</p>
        <strong className="text-2xl">
          ${productos[currentIndex].price}.00
        </strong>
      </div>
      <div className="absolute bottom-36">
        <Link href={"/products"}>
          <button className="py-4 px-6 rounded-sm bg-yellow-500">
            Shop Now!
          </button>
        </Link>
      </div>
      <div className="flex absolute bottom-40 left-[108%] z-50 space-x-4">
        <div>
          <BsFillArrowLeftCircleFill
            className="cursor-pointer opacity-80"
            size={"2rem"}
            color={"#FFB100"}
            onClick={prevSlide}
          />
        </div>
        <div>
          <BsFillArrowRightCircleFill
            className="cursor-pointer opacity-80"
            size={"2rem"}
            color={"#FFB100"}
            onClick={nextSlide}
          />
        </div>
      </div>
      <PageCount currentPage={currentPage} numPages={numPages} className="" />
    </div>
  );
};

export default Slider;
