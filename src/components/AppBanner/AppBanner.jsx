import React from "react";

import BgImage from "../../images/hero-bg-image.png";
import ios from "../../images/ios.png";
import android from "../../images/android.png";
import phoneMockup from "../../images/phone-mockup.png";

export default function AppBanner() {
  return (
    <section className="w-full h-[200px] bg-green-200 lg:h-[477px] overflow-hidden py-32 lg:py-72 relative font-mono">
      <img
        src={BgImage}
        alt="App Banner background"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-brand-overlay">
        <div className="container h-full flex items-center">
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start lg:text-left gap-4 py-48 overflow-hidden">
            <h3 className="text-brand-black font-bold text-2xl sm:text-3xl lg:text-5xl leading-tight">
              Shop Faster With Groceyish App
            </h3>
            <p className="text-[#838383] font-normal leading-tight">
              Available on both IOS & Android
            </p>
            <div className="cta flex items-center gap-2">
              <img
                className="w-24 sm:w-32 lg:w-full cursor-pointer hover:scale-105 transition-transform"
                src={ios}
                alt=""
              />
              <img
                className="w-24 sm:w-32 lg:w-full cursor-pointer hover:scale-105 transition-transform"
                src={android}
                alt=""
              />
            </div>
          </div>
          <div className="w-1/2 hidden lg:flex items-center justify-center">
            <img src={phoneMockup} alt="Mobile App Mockup" className="mt-20" />
          </div>
        </div>
      </div>
    </section>
  );
}
