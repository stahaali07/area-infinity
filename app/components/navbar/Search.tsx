"use client";

import { BiSearch } from "react-icons/bi";

const Search = () => {
  return (
    <div className="border-[1px] dark:border-none dark:bg-[#282828] w-full md:w-auto py-2 rounded-full shadow-sm hover:shadow-md transition cursor-pointer">
      <div className="flex flex-row items-center justify-between">
        <div className="text-sm font-semibold px-5">Affordable</div>
        <div className="hidden sm:block text-sm font-semibold px-6 border-x-[1px] flex-1 text-center">
          Exclusive
        </div>
        <div className="text-sm pl-6 pr-2 text-gray-600 dark:text-gray-400 flex flex-row items-center gap-3">
          <div className="hidden sm:block">Features</div>
          <div className="p-2 bg-[#EDA886] rounded-full text-white dark:text-[#282828]">
            <BiSearch size={18} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
