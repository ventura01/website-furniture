import React from "react";
import { BsArrowRight } from "react-icons/bs";

const RightFooter = () => {
  return (
    <div className="flex items-baseline">
      <div><BsArrowRight className="left-0 mb-8"/></div>
      <div className="md:absolute md:right-90 md:bottom-60"><button className="py-4 px-6 bg-yellow-500 hover:bg-yellow-300 hover:text-white">Add to Cart</button></div>
    </div>
  );
};

export default RightFooter;
