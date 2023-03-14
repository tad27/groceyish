import React from "react";

import peach from "../../images/categories/peach.png";
import strawberry from "../../images/categories/strawberry.png";
import apple from "../../images/categories/apple.png";
import orange from "../../images/categories/orange.png";
import potato from "../../images/categories/potato.png";
import tomato from "../../images/featured/tomato.png";
import carrot from "../../images/categories/carrot.png";

import TrendingColumn from "./TrendingColumn";
import TrendingCard from "./TrendingCard";

function TrendingSection() {
  const products = [
    {
      name: "Orange 1kg",
      image: orange,
      originalPrice: 3.99,
      discountedPrice: 2,
      rating: 4,
      ratedBy: 4,
      topSells: true,
      topRated: false,
      trending: true,
    },
    {
      name: "Potato 1kg",
      image: potato,
      originalPrice: 4,
      discountedPrice: 3,
      rating: 5,
      ratedBy: 10,
      topSells: false,
      topRated: true,
      trending: true,
    },
    {
      name: "Strawberry 1kg",
      image: strawberry,
      originalPrice: 5,
      discountedPrice: 4,
      rating: 3,
      ratedBy: 24,
      topSells: true,
      topRated: true,
      trending: false,
    },
    {
      name: "Carrot 1kg",
      image: carrot,
      originalPrice: 4,
      discountedPrice: 2,
      rating: 5,
      ratedBy: 40,
      topSells: true,
      topRated: false,
      trending: true,
    },
    {
      name: "Peach 1kg",
      image: peach,
      originalPrice: 9,
      discountedPrice: 6,
      rating: 4,
      ratedBy: 32,
      topSells: false,
      topRated: true,
      trending: false,
    },
  ];

  const getTopSells = () => {
    return products.filter((product) => product.topSells === true);
  };
  const getTopRated = () => {
    return products.filter((product) => product.topRated === true);
  };
  const getTrendingItems = () => {
    return products.filter((product) => product.trending === true);
  };
  const getRecentlyAddedItems = () => {
    return products.slice(0, 3);
  };

  return (
    <section className="pb-24">
      <div className="container grid gap-x-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        <TrendingColumn title="Top Sells" products={getTopSells()} />
        <TrendingColumn title="Top Rated" products={getTopRated()} />
        <TrendingColumn title="Trending Items" products={getTrendingItems()} />
        <TrendingColumn
          title="Recently Added"
          products={getRecentlyAddedItems()}
        />
      </div>
    </section>
  );
}

export default TrendingSection;
