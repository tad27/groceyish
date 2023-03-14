import React from "react";
import { AiFillStar } from "react-icons/ai";

export default function Rating({ stars, value, seller = "Nathan" }) {
  return (
    <div className="text-left text-brand-gray text-xs">
      <RatingStars stars={stars} value={value} />
      <span className="text-brand-gray">By </span>
      <span className="text-brand-baseGreen font-medium">{seller}</span>
    </div>
  );
}

const RatingStars = ({ stars, value = 0 }) => {
  const starsLength = Array(5).fill(0);

  let count = 0;

  return (
    <div className="flex items-center space-x-2">
      <span className="flex">
        {starsLength.map((star, index) => (
          <span key={index}>
            {++count <= stars ? (
              <AiFillStar className="text-yellow-500" />
            ) : (
              <AiFillStar className="text-gray-300" />
            )}
          </span>
        ))}
      </span>
      <span className="text-brand-gray">({value})</span>
    </div>
  );
};

export { RatingStars };
