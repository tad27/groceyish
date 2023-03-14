import React from "react";
import { RatingStars } from "../Rating/Rating";

function TrendingCard({ product }) {
  const { name, image, originalPrice, discountedPrice, rating, ratedBy } =
    product;

  return (
    <div className="flex rounded-md">
      <div className="bg-[#F4F6FA] p-2">
        <img className="w-[90px] h-[90px] object-contain" src={image} alt="" />
      </div>
      <div className="pl-3 flex flex-col justify-around text-left">
        <div className="text-xs">
          <h4 className="text-brand-black font-semibold text-base">{name}</h4>
          <RatingStars stars={rating} value={ratedBy} />
        </div>
        <div className="flex items-center">
          <span className="text-lg font-semibold text-brand-baseGreen mr-[10px]">
            ${discountedPrice}
          </span>
          <span className="text-sm text-brand-gray font-medium line-through">
            ${originalPrice}
          </span>
        </div>
      </div>
    </div>
  );
}

export default TrendingCard;
