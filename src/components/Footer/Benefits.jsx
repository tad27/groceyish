import React from "react";

import bestPrice from "../../images/benefits/best-price-deal.png";
import refundable from "../../images/benefits/refundable.png";
import freeDelivery from "../../images/benefits/free-delivery.png";

export default function Benefits() {
  return (
    <section className="flex flex-col md:flex-row md:items-start  gap-6 justify-between">
      {/* Card 1 */}
      <div className="md:w-1/3 py-5 hover:rounded-md flex flex-col md:flex-row gap-4 items-center">
        <img src={bestPrice} alt="" />
        <div className="no-flex flex flex-col md:items-start">
          <h4 className="text-brand-black md:flex-grow text-center md:text-left text-lg font-semibold">
            Best Price & Deals
          </h4>
          <p className="font-medium text-brand-gray text-sm md:text-left">
            Don’t miss our daily amazing deals and prices
          </p>
        </div>
      </div>

      {/* Card 2 */}
      <div className="md:w-1/3 py-5 flex flex-col items-center md:flex-row gap-4">
        <img src={refundable} alt="" />
        <div className="no-flex flex flex-col md:items-start">
          <h4 className="text-brand-black md:flex-grow text-center md:text-left text-lg font-semibold">
            Refundable
          </h4>
          <p className="font-medium text-brand-gray text-sm md:text-left">
            If your items have damage we agree to refund it
          </p>
        </div>
      </div>

      {/* Card 3 */}
      <div className="md:w-1/3 py-5 flex flex-col items-center md:flex-row gap-4">
        <img src={freeDelivery} alt="" />
        <div className="no-flex flex flex-col gap-2 md:items-start">
          <h4 className="text-brand-black md:flex-grow text-center md:text-left text-lg font-semibold">
            Free Delivery
          </h4>
          <p className="font-medium text-brand-gray text-sm md:text-left">
            Do purchase over $50 and get free delivery anywhere
          </p>
        </div>
      </div>
    </section>
  );
}
