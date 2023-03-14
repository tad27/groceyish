import React, { useRef, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FiMail, FiKey } from "react-icons/fi";

import coffee from "../../images/daily/coffee.png";
import sausage from "../../images/daily/sausage.png";
import greenTea from "../../images/daily/green-tea.png";
import onion from "../../images/daily/onion.png";
import HeroBgImage from "../../images/hero-bg-image.png";

import CategoryFilter from "../../Common/CategoryFilter";
import Rating from "../Rating";

function DailyBestSells() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    console.log("Username: ", username);
    console.log("Password: ", password);

    // Do something here and then
    setUsername("");
    setPassword("");
  };
  // const DailyBestProducts = [
  //   {
  //     name: "Orange 1kg",
  //     image: orange,
  //     originalPrice: 3.99,
  //     discountedPrice: 2,
  //     rating: 4,
  //     ratedBy: 4,
  //     topSells: true,
  //     topRated: false,
  //     trending: true,
  //   },
  //   {
  //     name: "Peach",
  //     quantity: 20,
  //     color: "FEEFEA",
  //     img: peach,
  //   },
  //   {
  //     name: "Vegetables",
  //     quantity: "220",
  //     color: "FFF3FF",
  //     img: vegetables,
  //   },
  //   {
  //     name: "Strawberry",
  //     quantity: "10",
  //     color: "F2FCE4",
  //     img: strawberry,
  //   },
  //   {
  //     name: "Apple",
  //     quantity: "40",
  //     color: "FEEFEA",
  //     img: apple,
  //   },
  //   {
  //     name: "Orange",
  //     quantity: "23",
  //     color: "ECFFEC",
  //     img: orange,
  //   },
  //   {
  //     name: "Potato",
  //     quantity: "3",
  //     color: "FFFCEB",
  //     img: potato,
  //   },
  //   {
  //     name: "Carrot",
  //     quantity: "9",
  //     color: "DEF9EC",
  //     img: carrot,
  //   },
  // ];

  const categoryFilterData = ["Featured", "Popular", "New"];

  return (
    <section className="pb-12 overflow-hidden">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center ">
          <h2 className="text-2xl font-semibold text-brand-black mr-4">
            Daily Best Sells
          </h2>
          {/* Category Filtes */}
          <CategoryFilter list={categoryFilterData} active="Featured" />
          <span className="bg-[#F35244] font-medium text-base text-brand-white rounded-sm px-4 py-1 md:ml-10">
            Expires in: <span className="ml-4">10 : 56 : 21</span>
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 m-2 xl:m-0 gap-2 py-6">
          {/* Daily Best Seller Card */}
          <div className="card border relative">
            <span className="badge badge-warning absolute top-0 left-0">
              Save 10%
            </span>
            <img
              className="w-[254px] h-[154px] object-cover mt-4"
              src={coffee}
              alt=""
            />
            <div className="p-2 flex flex-col items-start">
              <p className="text-brand-gray text-xs">Coffe & Tea</p>
              <h4 className="text-brand-black text-base font-semibold mb-2">
                Coffee 1kg
              </h4>
              <Rating stars={3} value={25} seller="Rose" />
              <div className="flex items-center mt-2 pb-2 border-b-2 w-full">
                <span className="text-lg font-semibold text-brand-baseGreen mr-[10px]">
                  $20
                </span>
                <span className="text-sm text-brand-gray font-medium line-through">
                  $25
                </span>
              </div>
              <hr className="mb-1 -mt-[4px] w-24 py-[3px] bg-brand-baseGreen rounded-full" />
              <span className="mb-4 text-xs font-semibold text-brand-black/75">
                Sold: 20/50
              </span>
              <button className="btn w-full text-sm flex items-center justify-center gap-2">
                <FaShoppingCart />
                Add to cart
              </button>
            </div>
          </div>

          {/* Daily Best Seller Card */}
          <div className="card border relative">
            <span className="badge badge-success absolute top-0 left-0">
              Best deal
            </span>
            <img
              className="w-[254px] h-[154px] object-cover mt-4"
              src={sausage}
              alt=""
            />
            <div className="p-2 flex flex-col items-start">
              <p className="text-brand-gray text-xs">Meat</p>
              <h4 className="text-brand-black text-base font-semibold mb-2">
                Halal Sausage 350g
              </h4>
              <Rating stars={5} value={20} seller="Jane" />
              <div className="flex items-center mt-2 pb-2 border-b-2 w-full">
                <span className="text-lg font-semibold text-brand-baseGreen mr-[10px]">
                  $15
                </span>
                <span className="text-sm text-brand-gray font-medium line-through">
                  $20
                </span>
              </div>
              <hr className="mb-1 -mt-[4px] w-20 py-[3px] bg-brand-baseGreen rounded-full" />
              <span className="mb-4 text-xs font-semibold text-brand-black/75">
                Sold: 14/30
              </span>
              <button className="btn w-full text-sm flex items-center justify-center gap-2">
                <FaShoppingCart />
                Add to cart
              </button>
            </div>
          </div>

          {/* Daily Best Seller Card */}
          <div className="card border relative">
            <span className="badge badge-warning absolute top-0 left-0">
              Save 4%
            </span>
            <img
              className="w-[254px] h-[154px] object-cover mt-4"
              src={greenTea}
              alt=""
            />
            <div className="p-2 flex flex-col items-start">
              <p className="text-brand-gray text-xs">Coffe & Tea</p>
              <h4 className="text-brand-black text-base font-semibold mb-2">
                Green Tea 250g
              </h4>
              <Rating stars={4} value={18} seller="Mariam" />
              <div className="flex items-center mt-2 pb-2 border-b-2 w-full">
                <span className="text-lg font-semibold text-brand-baseGreen mr-[10px]">
                  $75
                </span>
                <span className="text-sm text-brand-gray font-medium line-through">
                  $90
                </span>
              </div>
              <hr className="mb-1 -mt-[4px] w-28 py-[3px] bg-brand-baseGreen rounded-full" />
              <span className="mb-4 text-xs font-semibold text-brand-black/75">
                Sold: 24/40
              </span>
              <button className="btn w-full text-sm flex items-center justify-center gap-2">
                <FaShoppingCart />
                Add to cart
              </button>
            </div>
          </div>

          {/* Daily Best Seller Card */}
          <div className="card border relative">
            <span className="badge badge-warning absolute top-0 left-0">
              Save 25%
            </span>
            <img
              className="w-[254px] h-[154px] object-cover mt-4"
              src={onion}
              alt=""
            />
            <div className="p-2 flex flex-col items-start">
              <p className="text-brand-gray text-xs">Vegetables</p>
              <h4 className="text-brand-black text-base font-semibold mb-2">
                Onion 1kg
              </h4>
              <Rating stars={5} value={35} seller="Sara" />
              <div className="flex items-center mt-2 pb-2 border-b-2 w-full">
                <span className="text-lg font-semibold text-brand-baseGreen mr-[10px]">
                  $1
                </span>
                <span className="text-sm text-brand-gray font-medium line-through">
                  $4
                </span>
              </div>
              <hr className="mb-1 -mt-[4px] w-10 py-[3px] bg-brand-baseGreen rounded-full" />
              <span className="mb-4 text-xs font-semibold text-brand-black/75">
                Sold: 10/60
              </span>
              <button className="btn w-full text-sm flex items-center justify-center gap-2">
                <FaShoppingCart />
                Add to cart
              </button>
            </div>
          </div>

          {/* Daily Best Seller Card */}
          <div className="card border relative">
            <section className="rounded-[3px] w-full min-h-[400px] overflow-hidden font-mono">
              <img
                src={HeroBgImage}
                alt="Hero background"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-[#FFF5E1]/80 px-2 py-4">
                <div className="flex flex-col justify-center h-full gap-2">
                  <h6 className="text-brand-black uppercase text-3xl font-bold">
                    10% Off
                  </h6>
                  <span className="text-xs leading-none">
                    For new member sign up at the first time
                  </span>

                  <form onSubmit={handleRegister}>
                    <label
                      className="text-brand-black font-medium text-xs text-left block mt-4"
                      htmlFor="username"
                    >
                      Email address
                      <span className="text-red-600 font-medium tex-xl">*</span>
                      <span className="flex items-center p-1 py-2 mt-1 gap-1 bg-brand-white placeholder:text-brand-gray">
                        <FiMail className="text-brand-gray" />
                        <input
                          required
                          id="username"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                          type="email"
                          placeholder="nathan@gmail.com"
                          className="bg-transparent text-xs font-medium focus:outline-none"
                        />
                      </span>
                    </label>
                    <label
                      className="text-brand-black font-medium text-xs text-left block mt-4"
                      htmlFor="password"
                    >
                      Password
                      <span className="text-red-600 font-medium tex-xl">*</span>
                      <span className="flex items-center p-1 py-2 mt-1 gap-1 bg-brand-white placeholder:text-brand-gray">
                        <FiKey className="text-brand-gray" />
                        <input
                          required
                          id="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          type="password"
                          placeholder="Minimum 8 characters"
                          className="bg-transparent text-xs font-medium focus:outline-none"
                        />
                      </span>
                      <br />
                      {username && "Username: " + username} <br />
                      {password && "Password: " + password}
                    </label>
                    <button className="btn w-full text-sm flex items-center justify-center gap-2 mt-4">
                      Register Now
                    </button>
                  </form>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DailyBestSells;
