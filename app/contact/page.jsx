"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import NavLinks from "@/components/NavLinks";
import NavIcons from "@/components/NavIcons";

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
        <div className="flex flex-col items-center my-52">
          <div className="flex flex-col">
            <h1 className="font-semibold text-center text-[#0E8388] text-3xl mb-3">Contact us</h1>
            <p className="text-[#2E4F4F] text-sm mb-4">
              Have any question, idea or comments, contact us.
            </p>
          </div>
          <form
            className="flex flex-col w-96 p-4 bg-white rounded-lg border-2"
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
  );
};

export default ContactPage;
