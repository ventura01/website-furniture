import React from "react";
import { productos } from "../datos";

const PageCount = ({ numPages, currentPage }) => {
  const pages = productos.length;

  return (
    <div className="rotate-90 md:h-[50%] md:left-[1250px] z-30 absolute">
      <span className="text-2xl font-bold">{currentPage}</span>
      <span className="text-slate-400">/{numPages}</span>
    </div>
  );
};

export default PageCount;
