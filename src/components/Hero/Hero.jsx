import React, { useState } from "react";

import HeroBgImage from "../../images/hero-bg-image.png";
import HeroImage from "../../images/hero-image.png";

export default function Hero() {
  const [email, setEmail] = useState("");

  const handleSubscription = (e) => {
    e.preventDefault();
    email && alert(`Thanks - ${email} - for subscribing.`);
    setEmail("");
  };
  return (
    <section className="w-full mt-[88px] md:mt-[128px] lg:mt-[144px] h-[300px] lg:h-[477px] pb-80 sm:pb-0 overflow-hidden relative font-mono">
      <img
        src={HeroBgImage}
        alt="Hero background"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-brand-overlay">
        <div className="container h-full flex items-center">
          <div className="w-full p-2 lg:p-0 lg:w-1/2 flex flex-col items-center lg:items-start lg:text-left gap-4">
            <h1 className="text-brand-black font-bold text-2xl sm:text-3xl lg:text-5xl leading-tight">
              Don’t miss our daily amazing deals.
            </h1>
            <p className="text-[#838383] font-normal leading-tight">
              Save up to 60% off on your first order
            </p>
            <form
              onSubmit={handleSubscription}
              className="search h-14 w-full sm:w-[485px] min-w-max flex flex-col sm:flex-row items-center justify-between py-2"
            >
              <div className="flex w-3/4 sm:w-auto items-center bg-white p-2 gap-2 text-brand-gray grow h-full">
                <svg
                  className="hero"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M17.0303 0.96967C17.3232 1.26256 17.3232 1.73744 17.0303 2.03033L8.78033 10.2803C8.48744 10.5732 8.01256 10.5732 7.71967 10.2803C7.42678 9.98744 7.42678 9.51256 7.71967 9.21967L15.9697 0.96967C16.2626 0.676777 16.7374 0.676777 17.0303 0.96967Z"
                    fill="#ADADAD"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M17.0303 0.969691C17.2341 1.17342 17.3031 1.47584 17.2079 1.74778L11.9579 16.7478C11.8563 17.038 11.5878 17.2369 11.2806 17.2494C10.9733 17.2619 10.6895 17.0856 10.5646 16.8046L7.6818 10.3182L1.1954 7.43538C0.914389 7.31049 0.738092 7.02671 0.750627 6.71945C0.763163 6.41219 0.961991 6.14371 1.25224 6.04213L16.2522 0.792127C16.5242 0.696948 16.8266 0.765962 17.0303 0.969691ZM3.53331 6.83297L8.55461 9.06466C8.72428 9.14007 8.85995 9.27574 8.93536 9.44542L11.167 14.4667L15.2775 2.7225L3.53331 6.83297Z"
                    fill="#ADADAD"
                  />
                </svg>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full outline-none text-sm font-normal placeholder:text-brand-gray"
                />
              </div>
              <button className="btn mt-1 sm:mt-0 w-3/4 sm:w-auto rounded-l-none">
                Subscribe
              </button>
            </form>
          </div>
          <div className="w-1/2 absolute top-0 right-0">
            <img
              src={HeroImage}
              alt="Hero background"
              className="hidden lg:block h-full w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
