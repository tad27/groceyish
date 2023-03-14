import React from "react";
import { BsCart2 } from "react-icons/bs";

import Rating from "../Rating";
import redish from "../../images/featured/redish.png";
import potato from "../../images/featured/potato.png";
import tomato from "../../images/featured/tomato.png";
import broccoli from "../../images/featured/broccoli.png";
import greenBeans from "../../images/featured/green-beans.png";
import CategoryFilter from "../../Common/CategoryFilter";

// TODO: Put the products in an array and iterate them through
// const products = [{}];

function FeaturedProducts() {
  const categoryFilterData = [
    "All",
    "Vegetables",
    "Fruits",
    "Coffe & Tea",
    "Meat",
  ];

  return (
    <section className="pb-12">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center ">
          <h2 className="text-2xl font-semibold text-brand-black">
            Featured Products
          </h2>
          <CategoryFilter list={categoryFilterData} active="All" />
        </div>
        <div className="flex justify-between gap-4 py-6 overflow-x-auto">
          {/* Card */}
          <a className="card" href="#/">
            <div className="flex flex-col items-start text-left justify-center p-3 border-2 border-brand-lightGreen  gap-4">
              <img className="w-full h-full" src={redish} alt="" />
              <div>
                <p className="text-brand-gray text-xs">Fruit</p>
                <h4 className="text-brand-black text-sm font-semibold">
                  Radish 200g
                </h4>
              </div>
              <Rating stars={3} value={25} />
              <div className="w-full flex justify-between">
                <div className="flex gap-1 items-center">
                  <span className="text-brand-baseGreen text-base font-semibold">
                    $2
                  </span>
                  <span className="text-brand-gray text-xs line-through">
                    $3.99
                  </span>
                </div>
                <button className="btn-secondary flex items-center gap-1">
                  <BsCart2 />
                  Add
                </button>
              </div>
            </div>
          </a>
          <a className="card" href="#/">
            <div className="flex flex-col items-start text-left justify-center p-3 border-2 border-brand-lightGreen  gap-4">
              <img className="w-full h-full" src={potato} alt="" />
              <div>
                <p className="text-brand-gray text-xs">veggie</p>
                <h4 className="text-brand-black text-sm font-semibold">
                  Potatos 1kg
                </h4>
              </div>
              <Rating stars={4} value={34} seller="Zema" />
              <div className="w-full flex justify-between">
                <div className="flex gap-1 items-center">
                  <span className="text-brand-baseGreen text-base font-semibold">
                    $20
                  </span>
                  <span className="text-brand-gray text-xs line-through">
                    $35.99
                  </span>
                </div>
                <button className="btn-secondary flex items-center gap-1">
                  <BsCart2 />
                  Add
                </button>
              </div>
            </div>
          </a>
          <a className="card" href="#/">
            <div className="flex flex-col items-start text-left justify-center p-3 border-2 border-brand-lightGreen  gap-4">
              <img className="w-full h-full" src={tomato} alt="" />
              <div>
                <p className="text-brand-gray text-xs">veggie</p>
                <h4 className="text-brand-black text-sm font-semibold">
                  Tomatos 200g
                </h4>
              </div>
              <Rating stars={5} value={70} seller="Daniel" />
              <div className="w-full flex justify-between">
                <div className="flex gap-1 items-center">
                  <span className="text-brand-baseGreen text-base font-semibold">
                    $4.99
                  </span>
                  <span className="text-brand-gray text-xs line-through">
                    $9.99
                  </span>
                </div>
                <button className="btn-secondary flex items-center gap-1">
                  <BsCart2 />
                  Add
                </button>
              </div>
            </div>
          </a>
          <a className="card" href="#/">
            <div className="flex flex-col items-start text-left justify-center p-3 border-2 border-brand-lightGreen  gap-4">
              <img className="w-full h-full" src={broccoli} alt="" />
              <div>
                <p className="text-brand-gray text-xs">veggie</p>
                <h4 className="text-brand-black text-sm font-semibold">
                  Broccoli 1kg
                </h4>
              </div>
              <Rating stars={5} value={50} seller="Samson" />
              <div className="w-full flex justify-between">
                <div className="flex gap-1 items-center">
                  <span className="text-brand-baseGreen text-base font-semibold">
                    $5.99
                  </span>
                  <span className="text-brand-gray text-xs line-through">
                    $12.99
                  </span>
                </div>
                <button className="btn-secondary flex items-center gap-1">
                  <BsCart2 />
                  Add
                </button>
              </div>
            </div>
          </a>
          <a className="card" href="#/">
            <div className="flex flex-col items-start text-left justify-center p-3 border-2 border-brand-lightGreen  gap-4">
              <img className="w-full h-full" src={greenBeans} alt="" />
              <div>
                <p className="text-brand-gray text-xs">veggie</p>
                <h4 className="text-brand-black text-sm font-semibold">
                  Green Beans 250g
                </h4>
              </div>
              <Rating stars={4.5} value={120} seller="Meron" />
              <div className="w-full flex justify-between">
                <div className="flex gap-1 items-center">
                  <span className="text-brand-baseGreen text-base font-semibold">
                    $15.99
                  </span>
                  <span className="text-brand-gray text-xs line-through">
                    $19.99
                  </span>
                </div>
                <button className="btn-secondary flex items-center gap-1">
                  <BsCart2 />
                  Add
                </button>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default FeaturedProducts;
