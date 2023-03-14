import React from "react";
import { BsArrowRightShort } from "react-icons/bs";

import HeroBgImage from "../../images/hero-bg-image.png";
import boy from "../../images/boy.png";
import organicFood from "../../images/organic-food.png";

function CTACards() {
  return (
    <section className="pb-24 px-2 xl:px-0">
      <div className="container flex flex-col lg:flex-row gap-4">
        <section className="rounded-[3px] w-full h-[300px] overflow-hidden relative font-mono">
          <img
            src={HeroBgImage}
            alt="Hero background"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[#FFF5E1]/80">
            <div className="container h-full flex items-center">
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-4 pl-10 w-full sm:w-3/5">
                <button className="badge badge-warning">Free delivery</button>
                <h4 className="text-brand-black font-semibold text-xl">
                  Free delivery over $50
                </h4>
                <p className="text-[#838383] text-base -mt-2">
                  Shop $50 product and get free delivery anywhre.
                </p>
                <button className="btn flex gap-2 items-center">
                  Shop Now <BsArrowRightShort className="text-bold text-lg" />
                </button>
              </div>
              <div className="absolute hidden sm:block right-4 bottom-0">
                <img
                  src={boy}
                  alt="Hero background"
                  className="h-full w-full"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="rounded-[3px] w-full h-[300px] overflow-hidden relative font-mono">
          <img
            src={HeroBgImage}
            alt="Hero background"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-brand-lightGreen/80">
            <div className="container h-full flex items-center">
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-4 pl-10 w-full sm:w-3/5">
                <button className="badge bg-brand-baseGreen px-4">
                  60% off
                </button>
                <h4 className="text-brand-black font-semibold text-xl">
                  Organic Food
                </h4>
                <p className="text-[#838383] text-base -mt-2">
                  Save up to 60% off on your first order
                </p>
                <button className="btn flex gap-2 items-center">
                  Order Now <BsArrowRightShort className="text-bold text-lg" />
                </button>
              </div>
              <div className="absolute hidden sm:block right-0 bottom-0">
                <img
                  src={organicFood}
                  alt="Hero background"
                  className="h-full w-full"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

export default CTACards;
