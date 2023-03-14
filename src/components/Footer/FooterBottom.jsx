import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

import paymentImage from "../../images/Payment.png";

export default function FooterBottom() {
  return (
    <section className="pt-10 flex flex-col-reverse items-center md:flex-row md:justify-between gap-2">
      <p className="text-sm">@ 2022, All rights reserved.</p>
      <div className=" left-auto">
        <img
          className="w-1/2 md:w-3/4 lg:w-full inline-block"
          src={paymentImage}
          alt="Payment option badges"
        />
      </div>

      {/* Social Media Links */}
      <div className="social flex gap-2 text-xs md:text-base">
        <a
          href="#"
          className="bg-brand-baseGreen hover:bg-brand-baseGreen/80 text-brand-white p-1.5 sm:p-2 rounded-full"
        >
          <FaFacebookF />
        </a>
        <a
          href="#"
          className="bg-brand-baseGreen hover:bg-brand-baseGreen/80 text-brand-white p-1.5 sm:p-2 rounded-full"
        >
          <FaInstagram />
        </a>
        <a
          href="#"
          className="bg-brand-baseGreen hover:bg-brand-baseGreen/80 text-brand-white p-1.5 sm:p-2 rounded-full"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="#"
          className="bg-brand-baseGreen hover:bg-brand-baseGreen/80 text-brand-white p-1.5 sm:p-2 rounded-full"
        >
          <FaTwitter />
        </a>
      </div>
    </section>
  );
}
