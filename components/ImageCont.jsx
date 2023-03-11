import React from "react";
import Image from "next/image";

const ImageCont = () => {
  return (
    <div>
      <div className="md:absolute md:top-[30%] md:left-[-100px]">
        <Image src="/sofa.png" alt="sofa" width={600} height={600} className='md:w-240 object-cover object-center' priority />
      </div>
    </div>
  );
};

export default ImageCont;
