import React from "react";
import { BiSearch } from "react-icons/bi";

const Searchbar = () => {
  return (
    <div className="flex items-center justify-center border px-2 rounded-lg">
      <div>
        <input
          type="text"
          className="px-3 text-gray-500 font-semibold py-2 w-[550px] md:w-[450px] xl:w-[550px] focus:outline-none"
          placeholder="Search Any Services"
        />
      </div>
      <div className="text-2xl bg-yellow-600 p-1 rounded-lg text-white cursor-pointer">
        <BiSearch />
      </div>
    </div>
  );
};

export default Searchbar;
