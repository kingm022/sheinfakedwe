import React from "react";
import { FilterCategory } from "./types";

interface FilterSidebarProps {
  categories: FilterCategory[];
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({ categories }) => {
  return (
    <aside className="px-1.5 py-1 bg-white shadow-[0_4px_4px_rgba(0,0,0,0.25)] w-[177px] max-sm:w-full">
      <h2 className="mb-1 text-3xl underline">Filter</h2>
      {categories.map((category) => (
        <div key={category.name}>
          <h3 className="mx-0 my-2.5 text-xl">{category.name}</h3>
          <ul className="text-base">
            {category.options.map((option) => (
              <li key={option} className="mx-0 my-1">
                {option}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </aside>
  );
};

export default FilterSidebar;
