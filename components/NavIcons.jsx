import React from "react";
import { BsFillCartFill,BsFillHeartFill, BsFillPersonFill } from "react-icons/bs";

const NavIcons = () => {
  return (
    <section id="nav-icons">
      <div className="flex justify-end space-x-8 py-12">
        <div>
          <BsFillCartFill />
        </div>
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
