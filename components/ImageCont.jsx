import React from "react";
import Image from "next/image";

const ImageCont = () => {
  return (
    <div>
      <div className="absolute top-[30%] left-[-100px]">
        <Image src="/sofa.png" alt="sofa" width={600} height={600} className='w-240' />
      </div>
    </div>
  );
};

export default ImageCont;
