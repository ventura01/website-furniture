import React from "react";
import { BsArrowRight } from "react-icons/bs";

const fecha = new Date().getFullYear();

const RightFooter = () => {
  return (
    <div className="flex justify-between">
      <div className="self-center">
        <BsArrowRight />
      </div>
      {/*<div className="md:absolute md:right-90 md:bottom-60"><button className="py-4 px-6 bg-yellow-500 hover:bg-yellow-300 hover:text-white">Add to Cart</button></div>*/}
      <div className="mb-8">
        <div className="flex items-center justify-center my-4">
          <form>
            <input
              type="text"
              placeholder="Get updated"
              className="rounded-sm py-1 px-2"
            />
          </form>
          <button className="rounded-sm ml-2 bg-yellow-500 text-white py-[2px] px-4 hover:bg-yellow-400 hover:text-white ">
            Go
          </button>
        </div>
        <p className="capitalize text-xs text-center md:text-left">
          copyright &copy; {fecha}. all rights reserved.
        </p>
      </div>
    </div>
  );
};

export default RightFooter;
