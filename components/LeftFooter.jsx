import React from "react";
import { MdOutlineCatchingPokemon, MdFacebook } from "react-icons/md";
import { BsTwitch, BsTwitter, BsArrowLeft } from "react-icons/bs";

const LeftFooter = () => {
  return (
    <section id="left-footer" className="flex justify-between">
      <div className="flex space-x-4">  
        <div>
          <MdOutlineCatchingPokemon />
        </div>
        <div>
          <MdFacebook />
        </div>
        <div>
          <BsTwitch />
        </div>
        <div>
          <BsTwitter />
        </div>
      </div>
      <div>
        <BsArrowLeft />
      </div>
    </section>
  );
};

export default LeftFooter;
