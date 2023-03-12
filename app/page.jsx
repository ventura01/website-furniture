"use client";

import Image from "next/image";
import { Inter } from "next/font/google";
import NavLinks from "@/components/NavLinks";
import HeroContent from "@/components/HeroContent";
import LeftFooter from "@/components/LeftFooter";
import NavIcons from "@/components/NavIcons";
import ImageCont from "@/components/ImageCont";
import PageCount from "@/components/PageCount";
import RightFooter from "@/components/RightFooter";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="md:w-screen md:h-screen md:flex">
      <div className="px-2 h-full flex flex-1 flex-col justify-between md:pl-40 md:pr-24 pb-8">
        <NavLinks />
        <HeroContent />
        <LeftFooter />
      </div>
      <div className="h-full flex-1 bg-[#fff0c8] pr-40  flex flex-col pl-24 relative justify-between">
        <NavIcons />
        <ImageCont />
        <PageCount />

        <RightFooter />
      </div>
    </main>
  );
}
