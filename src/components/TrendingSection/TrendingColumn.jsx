import React from "react";
import TrendingCard from "./TrendingCard";

function TrendingColumn({ products, title }) {
  return (
    <div className="p-4 xl:p-0 flex flex-col items-center md:items-start">
      <h3 className="text-lg md:text-2xl text-left font-semibold border-b py-2">
        {title}
      </h3>
      <hr className="mb-8 -mt-[3px] w-24 py-[2px] bg-brand-baseGreen rounded-full" />
      <div className="flex flex-col gap-8">
        {products.map((product, index) => (
          <TrendingCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
}

export default TrendingColumn;
