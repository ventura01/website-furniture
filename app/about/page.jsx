import NavIcons from "@/components/NavIcons";
import NavLinks from "@/components/NavLinks";
import Image from "next/image";
import React from "react";

const AboutPage = () => {
  return (
    <div className="bg-[#F3F4ED]">
      <div className="container flex flex-col mx-auto">
        <div className="flex justify-between">
          <NavLinks />
          <NavIcons />
        </div>
        <div className="flex my-24">
          <div className="pl-36 pr-16 pt-10 w-1/2">
            <h3 className="text-4xl font-bold mb-8 text-[#424642]">Our Mission</h3>
            <p className="text-[#536162]">
              Theres this notion that to grow a business, you have to be ruthless.
              But we know theres a better way to grow. One where whats good for
              the bottom line is also good for customers. We believe businesses
              can grow with a conscience, and succeed with a soul — and that they
              can do it with inbound. Thats why weve created an ecosystem uniting
              software, education, and community to help businesses grow better
              every day.
            </p>
          </div>
          <div className="overflow-hidden w-1/2">
            <Image
              src={"/BrianAndDharmesh-photo.webp"}
              alt="image-about"
              width={500}
              height={500}
              className="object-cover object-center"
            />{" "}
          </div>
        </div>
        <div className="flex">
          <div className="w-1/2">
            <Image
              src={"/SUI-Homepage-Header-Desktop-Alternate.webp"}
              width={600}
              height={600}
              alt="img-about"
              className="object-center object-cover"
            ></Image>
          </div>
          <div className="pl-16 pr-36 pt-10 w-1/2">
            <h3 className="text-4xl font-bold mb-8 text-[#424642]">Our Story</h3>
            <p className="text-[#536162]">
              As fellow graduate students at MIT in 2004, Brian and Dharmesh
              noticed a shift in the way people shop and buy. Consumers were no
              longer tolerating interruptive bids for their attention — in fact,
              theyd gotten really, really good at ignoring them. From this shift,
              a company was born: HubSpot. It was founded on inbound, the notion
              that people dont want to be interrupted by marketers or harassed by
              salespeople — they want to be helped. Today, the inbound movement
              continues to empower businesses around the world to stop
              interrupting, start helping, and return their focus to the customer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
