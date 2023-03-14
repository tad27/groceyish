import React from "react";
import { Link } from "react-router-dom";

function Promotions() {
  return (
    <div className="mt-[148px] h-[80vh] flex flex-col justify-center">
      <h1 className="text-2xl">
        Welcome to <span className="text-brand-baseGreen">Promotions Page</span>
        !
      </h1>
      <p className="text-sm text-brand-gray mb-8">
        This page is in production, and will be available soon.
      </p>
      <Link to="/">
        <button className="btn">Return to Home</button>
      </Link>
    </div>
  );
}

export default Promotions;
