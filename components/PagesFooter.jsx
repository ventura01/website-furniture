import React from "react";
import { MdOutlineCatchingPokemon, MdFacebook } from "react-icons/md";
import { BsTwitch, BsTwitter, BsArrowLeft } from "react-icons/bs";

const fecha = new Date().getFullYear();

const PagesFooter = () => {
  return (
    <div className="flex justify-between">
      <div className="flex items-center">
        <div className="flex space-x-4">
          <div>
            <MdOutlineCatchingPokemon color="#ffffff" />
          </div>
          <div>
            <MdFacebook color="#ffffff" />
          </div>
          <div>
            <BsTwitch color="#ffffff" />
          </div>
          <div>
            <BsTwitter color="#ffffff" />
          </div>
        </div>
      </div>
      <div className="self-end">
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
    </div>
  );
};

export default PagesFooter;
