import React from "react";

function CategoryFilter({ list, active }) {
  return (
    <ul className="hidden lg:flex gap-3 items-center font-medium text-sm">
      {list.map((category) => (
        <li
          className={`
          ${active === category && "active"}
          ${active !== category && "hover:underline underline-offset-8"}
          `}
        >
          <a href="#/" className="">
            {category}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default CategoryFilter;
