import React from "react";

import peach from "../../images/categories/peach.png";
import vegetables from "../../images/categories/vegetables.png";
import strawberry from "../../images/categories/strawberry.png";
import apple from "../../images/categories/apple.png";
import orange from "../../images/categories/orange.png";
import potato from "../../images/categories/potato.png";
import carrot from "../../images/categories/carrot.png";
import CategoryFilter from "../../Common/CategoryFilter";

function Categories() {
  const categoryList = [
    {
      name: "Peach",
      quantity: 20,
      color: "FEEFEA",
      img: peach,
    },
    {
      name: "Vegetables",
      quantity: "220",
      color: "FFF3FF",
      img: vegetables,
    },
    {
      name: "Strawberry",
      quantity: "10",
      color: "F2FCE4",
      img: strawberry,
    },
    {
      name: "Apple",
      quantity: "40",
      color: "FEEFEA",
      img: apple,
    },
    {
      name: "Orange",
      quantity: "23",
      color: "ECFFEC",
      img: orange,
    },
    {
      name: "Potato",
      quantity: "3",
      color: "FFFCEB",
      img: potato,
    },
    {
      name: "Carrot",
      quantity: "9",
      color: "DEF9EC",
      img: carrot,
    },
  ];

  const categoryFilterData = [
    "All",
    "Vegetables",
    "Fruits",
    "Coffe & Tea",
    "Meat",
  ];

  return (
    <section className="categories pb-12">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center ">
          <h2 className="text-2xl font-semibold text-brand-black">
            Explore Categories
          </h2>
          {/* Category Filtes */}
          <CategoryFilter list={categoryFilterData} active="All" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 px-2 xl:px-0 justify-between gap-4 py-6">
          {categoryList.map(({ name, quantity, color, img }) => (
            <div
              key={name}
              style={{ backgroundColor: `#${color}` }}
              className={
                "card text-center flex flex-col items-center justify-center rounded-sm flex-1 py-4 cursor-pointer transition duration-100 hover:scale-110"
              }
            >
              <img
                className="w-[100px] h-[100px] object-contain mb-2"
                src={img}
                alt=""
              />
              <div>
                <h4 className="text-brand-black text-lg font-semibold">
                  {name}
                </h4>
                <p className="text-brand-gray text-xs">{quantity} Items</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Categories;
