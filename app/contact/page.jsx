"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import NavLinks from "@/components/NavLinks";
import NavIcons from "@/components/NavIcons";
import { BsWhatsapp,BsFillTelephoneFill,BsEnvelopeAt,BsGlobe2 } from "react-icons/bs";

const ContactPage = () => {
  const form = useRef();
  const [emailSent, setEmailSent] = useState(false);
  const [clickBtnSent, setClickBtnSent] = useState(false);
  console.log(clickBtnSent);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_w74gu6d",
        "template_b6i6ovp",
        form.current,
        "bDmkSx0wAL06Z43ZT"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          setEmailSent(true);
          setClickBtnSent(true);
          setTimeout(() => {
            setEmailSent(false);
          }, 5000);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="bg-[#CBE4DE] h-screen">
      <div className="container mx-auto">
        <div className="flex justify-between">
          <NavLinks />
          <NavIcons />
        </div>
        <div className="flex flex-col mt-40 ">
          <div className="">
            <h1 className="font-semibold text-center text-[#0E8388] text-3xl mb-3">
              Contact Us
            </h1>
            <p className="text-[#2E4F4F] text-center text-sm mb-4">
              Have any question, idea or comments, contact us.
            </p>
          </div>
          <div className=" flex self-center ">
            <div className="bg-[#0E8388] h-[365px] w-[250px] shadow-lg rounded-lg pl-10 pt-12 space-y-10">
              <div className="flex items-center">
                <BsWhatsapp color="#fff" />
                <p className="text-white text-sm ml-2">(505) 8848 2386</p>
              </div>
              <div className="flex items-center">
                <BsFillTelephoneFill color="#fff" />
                <p className="text-white text-sm ml-2">(505) 2248 2386</p>
              </div>
              <div className="flex items-center">
                <BsEnvelopeAt color="#fff" />
                <p className="text-white text-sm ml-2">correo@correo.com</p>
              </div>
              <div className="flex items-center">
                <BsGlobe2 color="#fff" />
                <p className="text-white text-sm ml-2">www.webpage.com</p>
              </div>
            </div>
            <form
              className="flex flex-col w-96 self-end p-4 bg-white rounded-lg border-2 shadow-lg"
              ref={form}
              onSubmit={sendEmail}
            >
              <label className="pl-4">Name</label>
              <input
                className="border-2 rounded-lg pl-4 mb-4 py-2"
                type="text"
                name="user_name"
                placeholder="John Doe"
              />
              <label className="pl-4">Email</label>
              <input
                className="border-2 rounded-lg pl-4 mb-4 py-2"
                type="email"
                name="user_email"
                placeholder="john@email.com"
              />
              <label className="pl-4">Message</label>
              <textarea
                className="py-2 pl-4 mb-4 border-2 rounded-lg"
                name="message"
                placeholder="Message"
              />
              <input
                className="rounded-lg mb-4 pl-2 bg-yellow-500 py-2 px-4 hover:bg-yellow-400"
                type="submit"
                value="Send"
                disabled={clickBtnSent}
              />
              {emailSent && (
                <span className="text-blue-600 text-center">
                  Message sent successfully.
                </span>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
