import React from "react";
import { BiSearch } from "react-icons/bi";

const HeroSearchBar = () => {
  return (
    <div className="mx-auto mt-5 flex items-center justify-center w-[450px] border px-2 rounded-lg bg-white">
      <div className="">
        <input
          type="text"
          className="px-3 text-gray-500 font-semibold py-2 w-[400px] focus:outline-none"
          placeholder="Search Any Services"
        />
      </div>
      <div className="text-2xl bg-yellow-600 p-1 rounded-lg text-white cursor-pointer">
        <BiSearch />
      </div>
    </div>
  );
};

export default HeroSearchBar;
